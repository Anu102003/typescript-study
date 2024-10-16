//with static
//cannot access the instance
var User3 = /** @class */ (function () {
    function User3(name, age) {
        this.age = age,
            this.name = name;
    }
    User3.isAdult = function (age) {
        return age >= 18;
    };
    return User3;
}());
console.log(User3.isAdult(30), "30");
console.log(User3.isAdult(10), "10");
