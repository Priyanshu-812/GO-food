const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Ram:wordpass@cluster0.asawy.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
};

module.exports = connectDB;
