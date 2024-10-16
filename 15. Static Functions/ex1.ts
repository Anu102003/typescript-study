//without static
class User2{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.age=age,
        this.name=name
    }
    isAdult(){
        return this.age>=18
    }
}
const user3=new User2("Anu",21)
console.log(user3.isAdult())