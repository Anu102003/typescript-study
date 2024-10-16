//with inhertance
class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.age = age
        this.lastName = lastName
    }
    greet() {
        return `hello ${this.lastName} ${this.lastName}`
    }
    getage() {
        return this.age
    }
}

class UserDetails extends Person {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age)
    }
}
class Administor extends Person {
    role: string
    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age)
        this.role=role
    }
    greet():string {
        return `hello ${this.firstName} ${this.lastName} Role: ${this.role}`
    }
    manageUsers() {
        return `Managing user this roles ${this.role}`
    }
}

//create instances / objects
let userDetails = new UserDetails("Anu", "Sivasamy", 21)
let administor = new Administor("Deep", "Sea", 21, "Admin")
console.log(userDetails.greet(), userDetails.getage())
console.log(administor.greet(), administor.getage(),administor.manageUsers())