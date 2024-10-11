import express from "express";
import { Campaign } from "../model/campaignModel.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth);

// Create new post
router.post("/kampanye", async function (req, res) {
  try {
    const { title, desc, location, start_date, end_date, event_type } =
      req.body;

    if (
      !title ||
      !desc ||
      !location ||
      !start_date ||
      !end_date ||
      !event_type
    ) {
      return res.status(400).send({
        message: "Send all required fields: title, desc, location, start_date, end_date, event_type",
      });
    }

    const newCampaign = {
      title,
      desc,
      location,
      start_date,
      end_date,
      event_type,
    };

    const data = await Campaign.create(newCampaign);

    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: error.message });
  }
});

// Get all campaigns
router.get("/kampanye", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    return res.status(200).send({
      count: campaigns.length,
      data: campaigns,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
});

// Get Article by id
router.get("/kampanye/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const data = await Campaign.findById(id);

    return res.status(200).send(data);
  } catch (err) {
    console.error(err);
    return res.status(400).send({
      message: err.message,
    });
  }
});

// Update Article
router.put("/kampanye/:id", async (req, res) => {
  try {
    const { title, desc, location, start_date, end_date, event_type } =
      req.body;

    // Validasi input
    if (
      !title ||
      !desc ||
      !location ||
      !start_date ||
      !end_date ||
      !event_type
    ) {
      return res.status(400).send({
        message: "Send all required fields: title and body",
      });
    }

    // Cari artikel berdasarkan ID
    const campaign = await Campaign.findById(id);

    // Jika artikel tidak ditemukan
    if (!campaign) {
      return res.status(404).send({ message: "campaign not found" });
    }

    // Verifikasi bahwa artikel dimiliki oleh user yang sedang login
    if (campaign.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "Forbidden" });
    }

    // Update artikel
    await Campaign.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ message: "Updated successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

// Delete article by id
router.delete("/kampanye/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const campaign = await Campaign.findByIdAndDelete(id);

    if (!campaign) {
      return res.status(404).json({ message: "campaign not found" });
    }

    if (campaign.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "Forbidden" });
    }

    return res.status(200).json({ message: "campaign deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

export default router;
