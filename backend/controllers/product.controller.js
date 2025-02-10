import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const postProduct = async (req, res) => {
    const product = req.body; // user will send this data to db;

    if (!product.name || !product.price || !product.image) {
        return res.status(404).json({
            success: false,
            message: "Please fill all the fields!"
        });
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error" + error
        })
    }

}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success:false , messgae : "Invalid Product ID"})
    };

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "The product is successfully deleted" });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error: ", error
        })
    }
}

export const getProduct = async (req, res) => {
    const products = await Product.find({}); // empty {} means All the items!
    try {
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server Error: ", err });
    }
}

export const updateProduct =  async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    console.log(product)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success:false , messgae : "Invalid Product ID"})
    };

    try {
        await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: product })
    } catch (err) {
        res.status(500).json({ status: false, message: "ServerError: ", err });
        console.log(err);
    }
}