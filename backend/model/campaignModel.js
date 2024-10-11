import mongoose from "mongoose";

const campaignSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    event_type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Mengelola createdAt dan updatedAt secara otomatis
  }
);

export const Campaign = mongoose.model("Campaign", campaignSchema);
