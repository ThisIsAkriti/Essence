import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../utils/slices/productSlice";
import axios from "axios";
import {base_url} from "../utils/constants"
const CreatePage = () => {
     
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [alert, setAlert] = useState(false);
    const [invalidAlert, setInvalidAlert] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const handleAddProduct = async() => {

        setInvalidAlert(false);
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
            dispatch(addNewProduct(res.data));
            setAlert(true);
            setNewProduct({ name: "",
                price: "",
                image: "",})
            
        } catch (err) {
            console.error(err.response ? err.response : err);
            setInvalidAlert(true);
        }
        
    }

    useEffect(() => {
        if (alert || invalidAlert) {
          const timer = setTimeout(() => {
            setFadeOut(true); 
            setTimeout(() => {
              setAlert(false);
              setInvalidAlert(false);
              setFadeOut(false);
              
            }, 800); 
          }, 1000); 
      
          return () => clearTimeout(timer);
        }
      }, [alert, invalidAlert]);
    return (
        <>
            <div className=" w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw]  ">
                
                <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl mb-10 text-center"> Create New Product</h1>

                <div className="flex-row space-y-4 px-10">
                
                    <div className="dark:bg-gray-800 bg-gray-200 p-4 px-6 rounded-lg text-sm xl:text-lg font-semibold "><input className="outline-none" type="text" placeholder="Name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} /></div>
                    <div className="dark:bg-gray-800 bg-gray-200 p-4 px-6 rounded-lg text-sm xl:text-lg font-semibold "><input className="outline-none" type="text" placeholder="Price" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} /></div>
                    <div className="dark:bg-gray-800 bg-gray-200 p-4 px-6 rounded-lg text-sm xl:text-lg font-semibold "><input className="outline-none" placeholder="Image" name="image" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} /></div>
                    <button onClick={handleAddProduct} className="bg-green-600 w-full rounded-lg text-md font-semibold py-3 cursor-pointer text-white mt-4 shadow-md active:opacity-70 ">Add Product</button>
                
                </div>

                {(alert || invalidAlert) && <div className=" fixed w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw]"> 
                    {
                        alert &&
                        <div className=" mt-4 flex flex-col items-center space-y-3">
                            <div className={`slide-up-1 ${fadeOut ? 'fade-out1' : ''} bg-orange-500 p-4 rounded-md w-fit text-white font-semibold`}>
                                <span>New Product added.</span>
                            </div>
                            <div className={`slide-up-2 ${fadeOut ? 'fade-out2' : ''} bg-green-600 p-4 rounded-md w-fit text-white font-semibold `}>
                                <span>Product added Successfully!</span>
                            </div>
                        </div>
                    }
                    {
                        invalidAlert &&
                        <div className=" mt-4 flex justify-center">
                            <div className={`slide-up-1 ${fadeOut ? 'fade-out1' : ''} bg-red-700 p-4 rounded-md w-fit text-white `}>
                                <span>Something went wrong</span>
                            </div>
                        </div>
                    }
                </div>}
            </div>
        </>
    )
}

export default CreatePage;