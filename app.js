import "dotenv/config";
import express from "express"
import router from "./routes/product.js" // Correct import without destructuring
import connectDB from "./db/connect.js"
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

app.use("/api/products", router); // Use route directly

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("🚀 ~ start ~ error:", error);
  }
};

start();
