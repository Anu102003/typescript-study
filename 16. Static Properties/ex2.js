var User1 = /** @class */ (function () {
    function User1(name) {
        this.name = name;
        User1.totalUsers++;
    }
    User1.prototype.getName = function () {
        return this.name;
    };
    User1.getTotal = function () {
        return User1.totalUsers;
    };
    User1.totalUsers = 0;
    return User1;
}());
console.log(User1.totalUsers);
var users1 = new User1("Anu");
var users2 = new User1("Deepsea");
console.log(users1.getName(), users2.getName(), User1.getTotal(), User1.totalUsers);
