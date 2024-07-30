const express = require("express");
const kerevizlog = require("kerevizlog");

const kLogger = new kerevizlog();

logging = (req, res, next) => {
  kLogger.info(
    `${req.method} Request on: ${req.baseUrl}, from ip: ${req.socket.remoteAddress}`
  );

  next();
};

module.exports.logging = logging;
