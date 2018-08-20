// ***********************************************************************************
// Dependencies
// ***********************************************************************************

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ***********************************************************************************
// Express.bs
// ***********************************************************************************

var app = express();
var PORT = process.env.PORT || 4200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ***********************************************************************************
// Routes
// ***********************************************************************************

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// ***********************************************************************************
// Listen Up Ya'll
// ***********************************************************************************

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});