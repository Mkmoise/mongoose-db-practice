const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get all the posts
router.get("/", async(req, res) => {
  try {
    const posts = await Post.find().sort({createdAt: -1});
    res.json(posts);
  }
  catch (error) {
    res.status(500).json({ error: "Failed to fetch posts"});
  }
});

//get one post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found"});
    }
     res.json(post);
  }
  catch (error) {
    res.status(400).json ({ error: "Invalid post Id" });
  }
}); 

//create post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } 
  catch (error) {
    res.status(400).json({ error: "Failed to create post" });
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    } 
    res.json (updatedPost);
  }
  catch (error) {
    res.status(400).json({ error: "Failed to update post" });
  }
});

//delete post
router.delete ("/:id", asyns (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    if (!deletePost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  }
  catch (error) {
    res.status(400).json({ error: "Failed to delete post" });
  }
});
module.exports = router;
