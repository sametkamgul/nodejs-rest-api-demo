const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { logging } = require("../middleware/logger");
const { getUser } = require("../service/userService");

const router = express.Router();

router.post("/", logging, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(404)
      .json({ error: "missing username/password credentials" });
  }

  try {
    // check db user here
    const user = await getUser(username);
    const isPasswordMatched = await bcrypt.compare(password, user?.password)

    if (!user || !isPasswordMatched) {
      return res
        .status(404)
        .json({ error: "invalid username/password credentials" });
    }

    const token = jwt.sign({ username, password }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token: token });
  } catch (error) {
    res.status(500).json({ error: error?.message || "internal server error" });
  }
});

module.exports = router;
