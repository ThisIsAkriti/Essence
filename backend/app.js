import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import productRoutes from "./routes/product.route.js";
import cors from'cors';
import path from "path";

dotenv.config();
const app = express();

const _dirname = path.resolve();

app.use(cors({
    origin: ['http://localhost:5173' , "https://essence-46no.onrender.com"],
    credentials: true
}));

const PORT = process.env.PORT || 5000;

app.use(express.json());// allows us to accept JSON data in req.body

app.use("/api/products", productRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
});
app.listen(PORT, () => {
    connectDB()
});