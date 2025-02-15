import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import {connectDB} from './config/db.js'
import productRoutes from "./routes/product.route.js";
import cors from'cors';

const allowedOrigins = ['https://essence-cyr4.onrender.com', 'http://localhost:5173']

dotenv.config();
const app = express();

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();
app.use(express.json());// allows us to accept JSON data in req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(_dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
    });
};
app.listen(PORT, () => {
    connectDB()
    console.log("App started at http://localhost:"+PORT);
});