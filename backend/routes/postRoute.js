import express from "express";
import { Article } from "../model/postModel.js";
// import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

// router.use(requireAuth);

// Create new article
router.post("/article", async (req, res) => {
  try {
    const { title, body, summary, author } = req.body;

    if (!title || !body || !summary || !author) {
      return res.status(400).json({ message: "Please provide title and body" });
    }

    const newArticle = { title, body, summary, author };
    const article = await Article.create(newArticle);

    return res.status(200).json(article);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
});

// Get all articles
router.get("/article", async (req, res) => {
  try {
    const articles = await Article.find();
    return res.status(200).json({ count: articles.length, data: articles });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});

// Get article by ID
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

// Update article by ID
router.put("/article/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    const { id } = req.params;

    if (!title || !body) {
      return res.status(400).json({ message: "Please provide title and body" });
    }

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    if (article.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    await Article.findByIdAndUpdate(id, { title, body }, { new: true });
    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
});

// Delete article by ID
router.delete("/article/:id", async (req, res) => {
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
