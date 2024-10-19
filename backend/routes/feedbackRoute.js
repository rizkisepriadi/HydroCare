import express from "express";
import { Feedback } from "../model/feedbackModel.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth);

// Create new feedback
router.post("/feedback", async (req, res) => {
  try {
    const { name, desc, position } = req.body;

    if (!name || !desc) {
      return res.status(400).json({ message: "Please provide name and desc" });
    }

    const newfeedback = { name, desc, position };
    const feedback = await Feedback.create(newfeedback);

    return res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Get all feedbacks
router.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    return res.status(200).json({ count: feedbacks.length, data: feedbacks });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Get feedback by ID
router.get("/feedback/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id);

    if (!feedback) {
      return res.status(404).json({ message: "feedback not found" });
    }

    return res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Update feedback by ID
router.put("/feedback/:id", async (req, res) => {
  try {
    const { name, desc, position } = req.body;
    const { id } = req.params;

    if (!name || !desc) {
      return res.status(400).json({ message: "Please provide name and desc" });
    }

    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({ message: "feedback not found" });
    }

    await Feedback.findByIdAndUpdate(id, { name, desc, position }, { new: true });
    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// Delete feedback by ID
router.delete("/feedback/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback.findByIdAndDelete(id);
    if (!feedback) {
      return res.status(404).json({ message: "feedback not found" });
    }

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
