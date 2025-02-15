import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import productRoutes from "./routes/product.route.js";
import cors from'cors';


dotenv.config();
const app = express();

app.use(cors({
    origin: ['http://localhost:5173' , "https://essence-khaki.vercel.app/"],
    credentials: true
}));

const PORT = process.env.PORT || 5000;

app.use(express.json());// allows us to accept JSON data in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB()
    console.log("App started at http://localhost:"+PORT);
});