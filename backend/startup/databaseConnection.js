const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose
    .connect("mongodb+srv://test:test@atlascluster.brya8st.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};
