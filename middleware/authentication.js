const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.query.token || req.body.token;

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);

    next();
  } catch (error) {
    return res.json({ error: "invalid token" });
  }
};

module.exports = authentication;
