var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, col1, col2, burgerInput, boolean, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, col1, col2, burgerInput, boolean], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, col, boolean, idToSearch, idInput, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col, boolean, idToSearch, idInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }

};

module.exports = orm;
