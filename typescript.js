// console.log("Ali")
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.add = function () {
        console.log("Mysql Added...");
    };
    Mysql.prototype["delete"] = function () {
        console.log("Mysql Deleted...");
    };
    return Mysql;
}());
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    Mongo.prototype.add = function () {
        console.log("Mongo Added...");
    };
    Mongo.prototype["delete"] = function () {
        console.log("Mongo Deleted...");
    };
    return Mongo;
}());
function data(database) {
    database.add();
}
data(new Mysql);
data(new Mongo);
