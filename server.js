var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 7070;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var orm = require("./config/orm.js");

orm.selectAll("burgers");
orm.insertOne("burgers", "burger_name", "devoured", "Jr. McChicken", false);



app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});