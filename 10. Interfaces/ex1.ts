interface User {
    firstName: string,
    lastName: string,
    age?: number,
    middleName?: string
}
// function greetUser(user: { firstName: string, lastName: string }) {
function greetUser(user: User) {
    return `Hello ${user.firstName} ${user.lastName}`
}

// function logUserDetails(user: {firstName: string, lastName: string,age:number}) {
function logUserDetails(user: User) {
    console.log(`User: ${user.firstName} ${user.middleName} ${user.lastName},age : ${user.age}`)
}

var user1 = {
    firstName: "Anu",
    lastName: "Sivasamy",
}
var user2 = {
    firstName: "Anu",
    lastName: "Sivasamy",
    age: 21,
    middleName: "Kunu"
}
console.log(greetUser(user1))
logUserDetails(user2)