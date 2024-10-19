import express from "express";
import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// Utility function to generate JWT token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const token = createToken(user._id);
    return res.status(201).json({ email: user.email, token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Route for user registration
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.signUp(name, email, password);
    const token = createToken(user._id);
    return res.status(201).json({ email: user.email, token });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.use(requireAuth);

// Route for campaign participation
router.post("/user/:id/participate", async (req, res) => {
  try {
    const userId = req.user._id;
    const campaignId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.campaigns.includes(campaignId)) {
      user.campaigns.push(campaignId);
      await user.save();
    }

    return res
      .status(200)
      .json({ message: "Successfully participated in the campaign" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/user/:id/campaigns", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("campaigns");

    if (!user || user.campaigns.length === 0) {
      return res
        .status(404)
        .json({ message: "No campaigns found for this user" });
    }

    return res.status(200).json({
      count: user.campaigns.length,
      campaigns: user.campaigns,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Route to fetch user details
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Route to update user account details
router.put("/user/:id/formaccount", async (req, res) => {
  try {
    const { name, telp, birth_date, city } = req.body;
    const data = { name, telp, birth_date, city };
    const user = await User.findByIdAndUpdate(req.params.id, data);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Route to update user security details (password)
router.put("/user/:id/formsecurity", async (req, res) => {
  try {
    const { oldPassword, newPassword, retypePassword } = req.body;

    if (!oldPassword || !newPassword || !retypePassword) {
      return res.status(400).json({
        message:
          "Please provide all required fields: oldPassword, newPassword, retypePassword",
      });
    }

    await User.updatePassword(
      req.params.id,
      oldPassword,
      newPassword,
      retypePassword
    );
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
