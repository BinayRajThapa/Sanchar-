const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(8800, () => {
  console.log("🚀 Backend Server is ready on port 8800!");
});
