import fs from "fs";

const dummyImages = [
  "https://fimgs.net/mdimg/perfume/375x500.73321.jpg",
  "https://fimgs.net/mdimg/perfume/375x500.73933.jpg",
  "https://fimgs.net/mdimg/perfume/375x500.26474.jpg",
  "https://fimgs.net/mdimg/perfume/375x500.67193.jpg",
  "https://fimgs.net/mdimg/perfume/375x500.55910.jpg"
];

// API Configuration
const API_URL = "https://fragrancefinder-api.p.rapidapi.com/dupes/66c70dee71fb63515fcfa1bf"; // Replace with actual perfume API
const API_KEY = process.env.API_KEY_IS; // If required

const getRandomPrice = () => Math.floor(Math.random() * (200 - 50 + 1)) + 50;

async function fetchPerfumes() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY, // Correct way for RapidAPI
        "X-RapidAPI-Host": "fragrancefinder-api.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!Array.isArray(data.recommendations)) {
    throw new Error("Unexpected API response format: 'recommendations' is not an array");
    }

    console.log("🔍 Full API Response:", JSON.stringify(data, null, 2));
    
    if (!data.recommendations || !Array.isArray(data.recommendations)) {
      throw new Error("Unexpected API response format: 'recommendations' is missing or not an array");
    }

    const perfumes = data.recommendations.map(perfume => {
      // ✅ Ensure 'name' exists before using split()
      const name = perfume?.perfume || "Unknown Perfume";
      const brand = perfume?.brand || "Unknown Brand";
      const image = perfume?.image&& perfume.image != "No Image Available"? perfume.image : dummyImages[Math.floor(Math.random() * dummyImages.length)];
      const description = perfume?.notes ? perfume.notes.join(", ") : "No description available";
      const url = perfume?.url || "No URL Available";
      const price = getRandomPrice();

      return {
        name,
        brand,
        price, 
        image,
        description,
        url,
      };
    });
    
    
    console.log("✅ Successfully fetched perfumes:", perfumes);

    fs.writeFileSync("data/perfumes.json", JSON.stringify(perfumes, null, 2));

  } catch (error) {
    console.error("Error fetching perfumes:", error.message);
  }
}

fetchPerfumes();
