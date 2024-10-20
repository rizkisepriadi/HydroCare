import express from "express";
import { Campaign } from "../model/campaignModel.js";
import requireAuth from "../middleware/requireAuth.js"; // Import requireAuth middleware

const router = express.Router();

// Create new campaign - Protected route
router.post("/campaign", requireAuth, async (req, res) => {
  try {
    const {
      title,
      desc,
      location,
      start_date,
      end_date,
      event_type,
      finished,
      image,
    } = req.body;

    if (
      !title ||
      !desc ||
      !location ||
      !start_date ||
      !end_date ||
      !event_type
    ) {
      return res.status(400).json({
        message:
          "Please provide all required fields: title, desc, location, start_date, end_date, event_type",
      });
    }

    const newCampaign = {
      title,
      desc,
      location,
      start_date,
      end_date,
      event_type,
      finished,
      user_id: req.user._id,
      image,
    };
    const campaign = await Campaign.create(newCampaign);

    return res.status(200).json(campaign);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Get all campaigns - Public route
router.get("/campaign", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    return res.status(200).json({ count: campaigns.length, data: campaigns });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Get campaign by ID - Public route
router.get("/campaign/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id);

    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    return res.status(200).json(campaign);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Update campaign by ID - Protected route
router.put("/campaign/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    await Campaign.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ message: "Campaign updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// Delete campaign by ID - Protected route
router.delete("/campaign/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findByIdAndDelete(id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    // Check if the user is authorized to delete this campaign
    if (campaign.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    return res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
