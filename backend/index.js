import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import campaignRoute from "./routes/campaignRoute.js";
import feedbackRoute from "./routes/feedbackRoute.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

// Check endpoint
app.get("/", (req, res) => {
  return res.status(200).send("HydroCare API is running");
});

// Define routes
app.use("/", userRoute);
app.use("/", postRoute);  // Jangan gunakan requireAuth di sini
app.use("/", campaignRoute);
app.use("/", feedbackRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
