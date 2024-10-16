//with access modifiers
var Users1 = /** @class */ (function () {
    function Users1(name, age) {
        this.age = age,
            this.name = name;
    }
    Users1.prototype.getName = function () { return this.name; }; // default it is public
    Users1.prototype.getAge = function () { return this.age; };
    Users1.prototype.setName = function (name) { this.name = name; }; // default it is public
    Users1.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    return Users1;
}());
var users1 = new Users1("Anu", 21);
console.log(users1.getName(), users1.getAge());
users1.setName("Deepsea");
users1.setAge(20);
console.log(users1.getName(), users1.getAge(), "seting +ve age ");
users1.setAge(-40);
console.log(users1.getName(), users1.getAge(), "seting -ve age ");
