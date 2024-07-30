const express = require("express");
const kerevizlog = require("kerevizlog");

const app = new express(express.json());
const kLogger = new kerevizlog();

const director = require("./routes/director");
const token = require("./routes/token");
const user = require("./routes/user");

const connection = require("./helper/connection");

app.use(express.json()); // parsing json in put/post requests

const PORT = process.env.PORT || 3000;

// db connection initialization
connection.init();

// director rest api endpoint
app.use("/api/v1/director/", director);
app.use("/api/v1/token/", token);
app.use("/api/v1/user/", user);

app.listen(PORT, () => {
  kLogger.info(`listening on PORT:${PORT}`);
});
