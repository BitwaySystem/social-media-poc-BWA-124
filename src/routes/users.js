const router = require("express").Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/User");

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, username, email, password } = req.body;

        // Encrypt the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            {
                fullname,
                username,
                email,
                password: hashedPassword,
            },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        const { password, ...other } = user._doc;
        if (user) {
            res.status(200).json(other);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.deleteOne(id);
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

module.exports = router;
