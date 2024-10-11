import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId, // Mongoose.Schema.Types.ObjectId
      ref: "User",
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Mengelola createdAt dan updatedAt secara otomatis
  }
);

export const Article = mongoose.model("Article", articleSchema);
