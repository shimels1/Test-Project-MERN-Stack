const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose
    .connect("mongodb://0.0.0.0:27017/song", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};
