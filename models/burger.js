module.exports = function (ormFunctions) {
    var orm = require("../config/orm.js");
    orm.selectAll("burgers");
    orm.insertOne("burgers", "burger_name", "devoured", newBurger, false);
    orm.updateOne("burgers", "devoured", true, "id", this.id);
};


