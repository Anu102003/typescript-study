//with static
//cannot access the instance
class User3{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.age=age,
        this.name=name
    }
    static isAdult(age:number){
        return age>=18
    }
}
console.log(User3.isAdult(30),"30")
console.log(User3.isAdult(10),"10")