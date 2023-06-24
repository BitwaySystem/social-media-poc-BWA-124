const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/User");

router.post("/register", async (req, res) => {
    try {
        const { fullname, username, email, password } = req.body;

        // Encrypt the password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userModel({
            fullname,
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred: ${error}` });
    }
});

router.post("/login", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await userModel.findOne({ email: email });
        if (user) {
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword)
                return res.status(400).json({ message: "Wrong password" });

            return res.status(200).json(user);
        } else {
            return res
                .status(404)
                .json({ message: `E-mail: ${email} not found` });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `An error occurred: ${error}` });
    }
});

module.exports = router;
