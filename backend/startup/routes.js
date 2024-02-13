const express = require("express");
var bodyParser = require("body-parser");

const songs = require("../routes/songs");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/songs", songs);
};
