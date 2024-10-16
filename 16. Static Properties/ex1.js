var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var totalUsers = 0;
function createUser(name) {
    totalUsers++;
    return new User(name);
}
var user1 = createUser("Anu");
var user2 = createUser("Deepsea");
console.log(user1.getName(), user2.getName(), totalUsers);
