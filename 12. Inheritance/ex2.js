var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//with inhertance
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.age = age;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        return "hello ".concat(this.lastName, " ").concat(this.lastName);
    };
    Person.prototype.getage = function () {
        return this.age;
    };
    return Person;
}());
var UserDetails = /** @class */ (function (_super) {
    __extends(UserDetails, _super);
    function UserDetails(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return UserDetails;
}(Person));
var Administor = /** @class */ (function (_super) {
    __extends(Administor, _super);
    function Administor(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Administor.prototype.greet = function () {
        return "hello ".concat(this.firstName, " ").concat(this.lastName, " Role: ").concat(this.role);
    };
    Administor.prototype.manageUsers = function () {
        return "Managing user this roles ".concat(this.role);
    };
    return Administor;
}(Person));
//create instances / objects
var userDetails = new UserDetails("Anu", "Sivasamy", 21);
var administor = new Administor("Deep", "Sea", 21, "Admin");
console.log(userDetails.greet(), userDetails.getage());
console.log(administor.greet(), administor.getage(), administor.manageUsers());
