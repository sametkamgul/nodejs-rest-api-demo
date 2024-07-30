const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { logging } = require("../middleware/logger");
const { createUser, getUser } = require("../service/userService");

const router = express.Router();

router.post("/", logging, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(404)
      .json({ error: "missing username/password credentials" });
  }

  try {
    const hashedPassword = bcrypt.hashSync(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );

    const existingUser = await getUser(username);

    if (!existingUser) {
      const user = await createUser(username, hashedPassword);

      delete user.password;

      return res.status(201).json({ user: user });
    }

    res.status(200).json({
      user: existingUser,
      error: true,
      message: "user is already registered",
    });
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

module.exports = router;
