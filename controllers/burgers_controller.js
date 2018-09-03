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

    app.get("*", function(req, res) {
        orm.selectAll("burgers", function(result) {
            var data = result;
            res.render("index", {burgers: data});
        });
    });

    app.post("/burgers", function(req, res) {
        orm.insertOne("burgers", "burger_name", "devoured", req.body.burger_name, false, function(result) {
            console.log("A new burger has been added!");
            res.status(200).end();
        });
    });

    app.put("/devour", function(req, res) {
        orm.updateOne("burgers", "devoured", true, "id", req.body.id, function(result) {
            console.log(`The burger with the ID of ${req.body.id} has been devoured!`);
            res.status(200).end();
        });
    });


};


// var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
// connection.query(queryString, [table, col, boolean, idToSearch, idInput]