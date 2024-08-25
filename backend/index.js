import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hy, your HydroCare is connected");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Failed to connect, cause", err);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log("App is listening to port", PORT)
})
