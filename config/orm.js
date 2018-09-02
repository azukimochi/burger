var connection = require("./connection.js");

var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, col1, col2, burgerInput, boolean) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, col1, col2, burgerInput, boolean], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }


};

module.exports = orm;
