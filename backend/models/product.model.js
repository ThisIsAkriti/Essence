import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
}, {
    timestamps: true
});
const Product = mongoose.model('Product', productSchema);

export default Product;