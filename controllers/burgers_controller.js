var ormFunctions = require("../models/burger.js");
var orm = require("../config/orm.js");
var express = require("express");
var app = express();
app.use(express.static('public'));

module.exports = function (app) {

    app.get("/", function(req, res) {
        orm.selectAll("burgers", function(result) {
            var data = result;
            res.render("index", {burgers: data});
        });
    });

    app.post("/burgers", function(req, res) {
        orm.insertOne("burgers", "burger_name", "devoured", req.body.burger_name, false, function(result) {
            console.log("Added new burger!");
            res.status(200).end();
        });
    });
};


// var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
// connection.query(queryString, [table, col1, col2, burgerInput, boolean]