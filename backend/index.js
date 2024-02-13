const express = require("express");
const app = express();

require('./startup/header')(app);
require("./startup/databaseConnection")(app);
require("./startup/routes")(app);
app.enable("trust proxy");

var port = 3000;
app.listen(port, () => {
  console.log(`server port is running in ${port}`);
});
