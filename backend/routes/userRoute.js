import express from "express";
import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import requireAuth from "../middleware/requireAuth.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Setup multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Rename file with timestamp to avoid conflicts
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images (jpeg, jpg, png) are allowed"));
    }
  },
});

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

router.post(
  "/user/:id/upload",
  requireAuth,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const imagePath = `/images/${req.file.filename}`;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { image: imagePath },
        { new: true }
      );

      return res
        .status(200)
        .json({ message: "Image uploaded successfully", image: user.image });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
);

// Route for campaign participation - Protected route
router.post("/user/:id/participate", requireAuth, async (req, res) => {
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

// Route to fetch user campaigns - Protected route
router.get("/user/:id/campaigns", requireAuth, async (req, res) => {
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

// Route to fetch user details - Protected route
router.get("/user/:id", requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Route to update user account details - Protected route
router.put("/user/:id/formaccount", requireAuth, async (req, res) => {
  try {
    const { name, telp, birth_date, city } = req.body;
    const data = { name, telp, birth_date, city };
    const user = await User.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Route to update user security details (password) - Protected route
router.put("/user/:id/formsecurity", requireAuth, async (req, res) => {
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
