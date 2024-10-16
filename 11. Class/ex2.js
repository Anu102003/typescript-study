//with class
var Users = /** @class */ (function () {
    function Users(firstName, lastName, age) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
    }
    Users.prototype.greet = function () {
        return "hello ".concat(this.lastName, " ").concat(this.lastName);
    };
    Users.prototype.getage = function () {
        return this.age;
    };
    return Users;
}());
//create instances / objects
var user1 = new Users("Anu", "Sivasamy", 21);
var user2 = new Users("Deep", "Sea", 21);
console.log(user1.greet(), user2.greet());
console.log(user1.getage(), user2.getage());
