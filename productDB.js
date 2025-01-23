import "dotenv/config"; // Load environment variables
import connectDB from './db/connect.js'; // Database connection function
import { Product } from './models/product.js'; // Product model
import ProductJson from "./product.json" assert { type: 'json' }; // JSON import with assertion

const start = async () => {
  try {
    // Connect to the database
    await connectDB(process.env.MONGODB_URL);

    // Clear existing data to avoid duplicates
    await Product.deleteMany(); // Delete all documents in the `Product` collection

    // Seed the database with the JSON data
    await Product.create(ProductJson);
    console.log("Product list successfully added to the database!");

    // Exit process after successful seeding
    process.exit(0);
  } catch (error) {
    console.error('🚀 ~ Error seeding the database:', error);

    // Exit process with failure
    process.exit(1);
  }
};

start();

