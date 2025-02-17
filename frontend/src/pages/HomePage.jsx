import { useEffect, useState } from "react";
import { base_url } from "../utils/constants";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from 'axios';
import {existingProductDelete, modifyProduct} from "../utils/slices/productSlice"
import { useDispatch } from "react-redux";
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isOwner, setIsOwner] = useState(false);
    const { secretKey } = useParams();
    const secretKeyStored = import.meta.env.VITE_SECRET_KEY;
    
    const accessKey = location.pathname.includes(secretKeyStored);
    const valid = secretKey && accessKey;
    
    useEffect(() => {
        if (secretKey) {
            if (valid) {
                setIsOwner(true);
            } else {
                navigate("/ErrorPage")
            }

        }
    }, [secretKey, secretKeyStored, location.pathname]);
    
    const [productInfo, getProductInfo] = useState([]);
    const [editingId, getEditingId] = useState(null);
    const [editedProduct, getEditProduct] = useState({
        name: "",
        image: "",
        price: ""
    });

    const getAllProducts = async() => {
        const res = await axios.get(
            base_url + "/api/products",
            { withCredentials: true }
        );
        
        getProductInfo(res.data.data);
    }

    const removeProduct = async (id) => {

        try {
            await axios.delete(base_url + `/api/products/${id}`, { withCredentials: true });
            dispatch(existingProductDelete(id));
            getProductInfo(productInfo.filter(product => product._id !== id));
            console.log("The product is deleted! " + id);

        } catch (err) {
            console.log("error " + err);
        }
        
    }

    const handleEditClick = async (product) => {
        getEditingId(product._id);
        getEditProduct({ ...product })
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        getEditProduct((prev) => ({ ...prev, [name]: value }))
    };

    const handleSave = async() => {
        try {
            await axios.put(`${base_url}/api/products/${editedProduct._id}`, editedProduct, { withCredentials: true });

            dispatch(modifyProduct(editedProduct)); 

            getProductInfo(prevProducts => 
                prevProducts.map(prod => prod._id === editedProduct._id ? editedProduct : prod)
                
            );

            getEditingId(null);

        } catch (error) {
            console.error("Error updating product:", error);
        }
        
    }
    useEffect(() => {
        getAllProducts();
    }, []);
    
    if (productInfo.length === 0) return <div>No products found!</div>;
    
    return (
        <>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-20 mt-36 mb-4 border-gray-200 border shadow-xl shadow-gray-300 dark:border dark:border-gray-800 dark:shadow-md dark:shadow-gray-800  rounded-md py-12 px-8">
                
                {
                    productInfo.map((product) => (

                        <div key={product._id} className=" w-64 h-[484px] border border-gray-200 dark:border-gray-800 p-4 rounded-md shadow-md shadow-gray-300 dark:shadow-gray-800">
                            
                            {editingId === product._id ? (
                                
                                <div className="flex flex-col justify-center h-full space-y-2">
                                    
                                    <div className=""> 
                                        <img src={editedProduct.image} alt="product image" className="rounded-md h-60 w-80 object-cover" />
                                        <input
                                            type="text"
                                            name="image"
                                            value={editedProduct.image}
                                            onChange={handleChange}
                                            className="border p-2 mt-4 w-full rounded-md outline-none border-gray-300 dark:border-gray-800"
                                        />
                                        </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedProduct.name}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-md outline-none border-gray-300 dark:border-gray-800"
                                    />
                                    <input
                                        type="text"
                                        name="price"
                                        value={editedProduct.price}
                                        onChange={handleChange}
                                        className="border p-2 w-full rounded-md outline-none border-gray-300 dark:border-gray-800"
                                    />
                                    <button
                                        onClick={handleSave}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 outline-none border-gray-300 dark:border-gray-800"
                                    >
                                        Save
                                    </button>
                                </div>
                                
                            )
                            :
                            (
                            <>
                                <img className=" h-72 w-64 border border-gray-300 dark:border-gray-700 rounded-md" src={product.image} alt="perfume" />
                                <div className="flex flex-col space-y-2 mt-4">
                                    <div className="font-bold text-xl line-clamp-2 overflow-hidden text-center h-[56px]">{product.name} Opulent Blend</div>
                                    <div className="font-semibold text-lg text-center">${product.price}</div>
                                    <div className="mt-4 px-2 gap-x-2 font-bold text-lg rounded-lg flex w-full justify-between">
                                    
                                        <CiEdit className="size-6 text-blue-600 cursor-pointer" onClick={() => handleEditClick(product)} />
                                        {isOwner && <MdOutlineDelete className="size-6 text-red-600 cursor-pointer " onClick={() => removeProduct(product._id)} />}
                                    
                                    </div>
                                </div>
                            </>
                            )}
                        </div>
                    ))
                }
                
            </div>
            
        </>
    )
}

export default HomePage;
