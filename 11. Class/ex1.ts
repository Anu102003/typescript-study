//without class
let u1 = { firstName: "Anu", lastName: "Sivasamy", age: 21 }
let u2 = { firstName: "Deep", lastName: "Sea", age: 21 }

function greet(user: { firstName: string, lastName: string }) {
    return `Hello ${user.firstName} ${user.lastName}`
}

function getAge(user: { age:number }) {
    return user.age
}
console.log(greet(u1))
console.log(getAge(u1))

console.log(greet(u2))
console.log(getAge(u2))