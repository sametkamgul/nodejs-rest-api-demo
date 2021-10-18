var express = require("express");
var kerevizlog = require("kerevizlog");

var express = new express();
var kLogger = new kerevizlog();

logging = (req, res, next) => {
    kLogger.info(
        `${req.method} Request on: ${req.baseUrl}, from ip: ${req.socket.remoteAddress}`
    );

    next();
};

module.exports.logging = logging;
