var express = require("express");
var kerevizlog = require("kerevizlog");

var app = new express(express.json());
var kLogger = new kerevizlog();

var director = require("./routes/director");

var connection = require("./helper/connection");

app.use(express.json()); // parsing json in put/post requests

var PORT = process.env.PORT || 3000;

// db connection initialization
connection.init();

// director rest api endpoint
app.use("/api/v1/director/", director);

app.listen(PORT, () => {
    kLogger.info(`listening on PORT:${PORT}`);
});
