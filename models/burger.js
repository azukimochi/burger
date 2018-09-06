var orm = require("../config/orm.js");

var ormFunctions = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result)
        });
    },
    insertOne: function(col1, col2, burgerInput, boolean, cb) {
        orm.insertOne("burgers", col1, col2, burgerInput, boolean, function(result) {
            cb(result);
        });
    },
    updateOne: function(col, boolean, idToSearch, idInput, cb) {
        orm.updateOne("burgers", col, boolean, idToSearch, idInput, function(result) {
            cb(result);
        });
    }
};




module.exports = ormFunctions;