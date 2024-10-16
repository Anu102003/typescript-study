//without class
var u1 = { firstName: "Anu", lastName: "Sivasamy", age: 21 };
var u2 = { firstName: "Deep", lastName: "Sea", age: 21 };
function greet(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function getAge(user) {
    return user.age;
}
console.log(greet(u1));
console.log(getAge(u1));
console.log(greet(u2));
console.log(getAge(u2));
