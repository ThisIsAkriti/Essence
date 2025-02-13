import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addProduct } from "../utils/slices/productSlice";
import axios from "axios";
import {base_url} from "../utils/constants"
const CreatePage = () => {
     
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const handleAddProduct = async() => {

        try {
            const res = await axios.post(
                base_url + "/api/products",
                {
                    name:newProduct.name,
                    price:newProduct.price,
                    image:newProduct.image,
                },
                { withCredentials: true }
            );
            dispatch(addProduct(res.data))
            navigate('/');
        } catch (err) {
            console.error(err.response ? err.response : err);
        }
        
    }

    return (
        <>
            <div className=" w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] ">
                
                <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl mb-10 text-center"> Create New Product</h1>

                <div className="flex-row space-y-4 px-10">
                
                    <div className="dark:bg-gray-800 bg-gray-200 p-4 px-6 rounded-lg text-sm xl:text-lg font-semibold "><input className="outline-none" type="text" placeholder="Name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} /></div>
                    <div className="dark:bg-gray-800 bg-gray-200 p-4 px-6 rounded-lg text-sm xl:text-lg font-semibold "><input className="outline-none" type="text" placeholder="Price" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} /></div>
                    <div className="dark:bg-gray-800 bg-gray-200 p-4 px-6 rounded-lg text-sm xl:text-lg font-semibold "><input className="outline-none" placeholder="Image" name="image" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} /></div>
                    <button onClick={handleAddProduct} className="bg-green-600 w-full rounded-lg text-md font-semibold py-3 cursor-pointer text-white mt-4">Add Product</button>
                
                </div>

            </div>
        </>
    )
}

export default CreatePage;