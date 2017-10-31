const express = require("express");
const bodyParser = require("body-parser");
const sequlize = require("sequlize");
const app = express();                           
const PORT = process.env.PORT || 8080;
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./routes/api");
const react  = require("react");
var db = require("./models/login");




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api.js")(app);
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
