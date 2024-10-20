import express from "express";
import { Article } from "../model/postModel.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// GET: Public route, no authentication required
router.get("/article", async (req, res) => {
  try {
    const articles = await Article.find();
    return res.status(200).json({ count: articles.length, data: articles });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// GET by ID: Public route, no authentication required
router.get("/article/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    return res.status(200).json(article);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// POST: Protected route, authentication required
router.post("/article", requireAuth, async (req, res) => {
  try {
    const { title, body, summary, author, image } = req.body;

    if (!title || !body || !summary || !author) {
      return res.status(400).json({ message: "Please provide title and body" });
    }

    const newArticle = { title, body, summary, author, image };
    const article = await Article.create(newArticle);

    return res.status(200).json(article);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// PUT: Protected route, authentication required
router.put("/article/:id", requireAuth, async (req, res) => {
  try {
    const { title, body, summary, author, image } = req.body;
    const { id } = req.params;

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    await Article.findByIdAndUpdate(id, { title, body, summary, author, image }, { new: true });
    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// DELETE: Protected route, authentication required
router.delete("/article/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findByIdAndDelete(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    if (article.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
