//without inhertance
class User{
    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string,lastName:string,age:number){
        this.firstName=firstName
        this.age=age
        this.lastName=lastName
    }
    greet(){
        return `hello ${this.lastName} ${this.lastName}`
    }
    getage(){
        return this.age
    }
}
class Admin{
    firstName:string;
    lastName:string;
    age:number;
    role:string
    constructor(firstName:string,lastName:string,age:number,role:string){
        this.firstName=firstName
        this.age=age
        this.lastName=lastName
        this.role=role
    }
    greet(){
        return `hello ${this.firstName} ${this.lastName} Role: ${this.role}`
    }
    getage(){
        return this.age
    }
    manageUsers(){
        return `Managing user this roles ${this.role}`
    }
}

//create instances / objects
let user=new User("Anu","Sivasamy",21)
let admin=new Admin("Deep","Sea",21,"Admin")
console.log(user.greet(),user.getage())
console.log(admin.greet(),admin.getage(),admin.manageUsers())