//with inhertance
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
    }
    User.prototype.greet = function () {
        return "hello ".concat(this.lastName, " ").concat(this.lastName);
    };
    User.prototype.getage = function () {
        return this.age;
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
        this.role = role;
    }
    Admin.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName, " Role: ").concat(this.role);
    };
    Admin.prototype.getage = function () {
        return this.age;
    };
    Admin.prototype.manageUsers = function () {
        return "Managing user this roles ".concat(this.role);
    };
    return Admin;
}());
//create instances / objects
var user = new User("Anu", "Sivasamy", 21);
var admin = new Admin("Deep", "Sea", 21, "Admin");
console.log(user.greet(), user.getage());
console.log(admin.greet(), admin.getage(), admin.manageUsers());
