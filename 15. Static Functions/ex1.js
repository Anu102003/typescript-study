//without static
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.age = age,
            this.name = name;
    }
    User2.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return User2;
}());
var user3 = new User2("Anu", 21);
console.log(user3.isAdult());
