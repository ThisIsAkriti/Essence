import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs"; // ✅ Import fs to read the JSON file
import Perfume from "../models/perfumeSchema.model.js";

dotenv.config(); // ✅ Load environment variables

const perfumesData = JSON.parse(fs.readFileSync("./data/perfumes.json", "utf-8")); // ✅ Read JSON file

async function importData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected...");

    await Perfume.deleteMany(); // Clear existing data
    await Perfume.insertMany(perfumesData);

    console.log("✅ Data Imported Successfully!");
    process.exit(); // Exit after success
  } catch (error) {
    console.error("❌ Error importing data:", error);
    process.exit(1); // Exit with failure
  }
}

importData();
