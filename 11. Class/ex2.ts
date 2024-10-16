//with class
class Users{
    firstName:string;
    lastName:string;
    age:number

    constructor(firstName:string,lastName:string,age:number){
        this.firstName=firstName
        this.age=age
        this.lastName=lastName
    }
    greet(){
        return `hello ${this.firstName} ${this.lastName}`
    }
    getage(){
        return this.age
    }
}

//create instances / objects
let user1=new Users("Anu","Sivasamy",21)
let user2=new Users("Deep","Sea",21)
console.log(user1.greet(),user2.greet())
console.log(user1.getage(),user2.getage())