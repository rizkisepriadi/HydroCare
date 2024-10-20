import express from "express";
import { Feedback } from "../model/feedbackModel.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// Create new feedback - Protected route
router.post("/feedback", requireAuth, async (req, res) => {
  try {
    const { name, desc, position, image } = req.body;

    if (!name || !desc) {
      return res.status(400).json({ message: "Please provide name and desc" });
    }

    const newFeedback = { name, desc, position, image };
    const feedback = await Feedback.create(newFeedback);

    return res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Get all feedbacks - Public route
router.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    return res.status(200).json({ count: feedbacks.length, data: feedbacks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Get feedback by ID - Public route
router.get("/feedback/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id);

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    return res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Update feedback by ID - Protected route
router.put("/feedback/:id", requireAuth, async (req, res) => {
  try {
    const { name, desc, position, image } = req.body;
    const { id } = req.params;

    if (!name || !desc) {
      return res.status(400).json({ message: "Please provide name and desc" });
    }

    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    // Check if the user is authorized to update this feedback
    if (feedback.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    await Feedback.findByIdAndUpdate(
      id,
      { name, desc, position, image },
      { new: true }
    );
    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// Delete feedback by ID - Protected route
router.delete("/feedback/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback.findByIdAndDelete(id);
    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    // Check if the user is authorized to delete this feedback
    if (feedback.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
