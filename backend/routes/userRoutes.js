const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create a new user
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
});

module.exports = router;
