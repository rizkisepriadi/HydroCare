import express from "express";
import { Campaign } from "../model/campaignModel.js";
// import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// router.use(requireAuth);

// Create new campaign
router.post("/campaign", async (req, res) => {
  try {
    const {
      title,
      desc,
      location,
      start_date,
      end_date,
      event_type,
      finished,
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
    };
    const campaign = await Campaign.create(newCampaign);

    return res.status(200).json(campaign);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Get all campaigns
router.get("/campaign", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    return res.status(200).json({ count: campaigns.length, data: campaigns });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Get campaign by ID
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

// Update campaign by ID
router.put("/campaign/:id", async (req, res) => {
  try {
    const {
      title,
      desc,
      location,
      start_date,
      end_date,
      event_type,
      finished,
    } = req.body;
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

// Delete campaign by ID
router.delete("/campaign/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findByIdAndDelete(id);
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

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
