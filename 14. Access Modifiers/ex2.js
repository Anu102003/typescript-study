//without access modifiers
var Userss = /** @class */ (function () {
    function Userss(name, age) {
        this.age = age,
            this.name = name;
    }
    return Userss;
}());
var userss = new Userss("Anu", 21);
console.log(userss.name, userss.age);
userss.name = "Deep";
userss.age = 40;
console.log(userss.name, userss.age);
