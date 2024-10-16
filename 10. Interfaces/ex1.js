// function greetUser(user: { firstName: string, lastName: string }) {
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
// function logUserDetails(user: {firstName: string, lastName: string,age:number}) {
function logUserDetails(user) {
    console.log("User: ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, ",age : ").concat(user.age));
}
var user1 = {
    firstName: "Anu",
    lastName: "Sivasamy",
};
var user2 = {
    firstName: "Anu",
    lastName: "Sivasamy",
    age: 21,
    middleName: "Kunu"
};
console.log(greetUser(user1));
logUserDetails(user2);
