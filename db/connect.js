import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;