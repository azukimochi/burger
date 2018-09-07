var ormFunctions = require("../models/burger.js");
// var orm = require("../config/orm.js");
var express = require("express");

// var Router = require("router");
// var app = express();
// app.use(express.static('public'));


var router = express.Router();
    router.get("/", function(req, res) {
        ormFunctions.selectAll(function(result) {
            var data = result;
            res.render("index", {burgers: data});
        });
    });

    router.get("*", function(req, res) {
        ormFunctions.selectAll(function(result) {
            var data = result;
            res.render("index", {burgers: data});
        });
    });

    
    router.post("/burgers", function(req, res) {
        ormFunctions.insertOne("burger_name", "devoured", req.body.burger_name, false, function(result) {
            console.log("A new burger has been added!");
            res.status(200).end();
        });
    });

    router.put("/devour", function(req, res) {
        ormFunctions.updateOne("devoured", true, "id", req.body.id, function(result) {
            console.log(`The burger with the ID of ${req.body.id} has been devoured!`);
            res.status(200).end();
        });
    });

module.exports = router;


// var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
// connection.query(queryString, [table, col, boolean, idToSearch, idInput]