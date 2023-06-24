const router = require("express").Router();
const postModel = require("../models/Post");

router.post("/create", async (req, res) => {
    const post = new postModel(req.body);
    try {
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await postModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

router.get("/timeline", async (req, res) => {
    let postArray = [];
    try {
        const posts = await postModel.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

module.exports = router;
