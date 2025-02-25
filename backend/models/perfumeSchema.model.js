import mongoose from "mongoose";

const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true }
}, { timestamps: true });

const Perfume = mongoose.model("Perfume", perfumeSchema);

export default Perfume;
