import express from "express";
import { Article } from "../model/postModel.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth);

// Create new post
router.post("/article", async function (req, res) {
  try {
    const { title, body } = req.body;
    const user_id = req.user._id;

    if (!title || !body) {
      return res.status(400).send({
        message: "Send all required fields: title, body",
      });
    }

    const newArticle = {
      title,
      body,
      user_id,
    };

    const data = await Article.create(newArticle);

    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: error.message });
  }
});

// Get all Articles
router.get("/article", async (req, res) => {
  try {
    const articles = await Article.find();
    return res.status(200).send({
      count: articles.length,
      data: articles,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server error" });
  }
});

// Get Article by id
router.get("/article/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const data = await Article.findById(id);

    return res.status(200).send(data);
  } catch (err) {
    console.error(err);
    return res.status(400).send({
      message: err.message,
    });
  }
});

// Update Article
router.put("/article/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    const { id } = req.params;

    // Validasi input
    if (!title || !body) {
      return res.status(400).send({
        message: "Send all required fields: title and body",
      });
    }

    // Cari artikel berdasarkan ID
    const article = await Article.findById(id);
    
    // Jika artikel tidak ditemukan
    if (!article) {
      return res.status(404).send({ message: "Article not found" });
    }

    // Verifikasi bahwa artikel dimiliki oleh user yang sedang login
    if (article.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "Forbidden" });
    }

    // Update artikel
    await Article.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ message: "Updated successfully" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});


// Delete article by id
router.delete("/article/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findByIdAndDelete(id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    if (article.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "Forbidden" });
    }

    return res.status(200).json({ message: "Article deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
});

export default router;
