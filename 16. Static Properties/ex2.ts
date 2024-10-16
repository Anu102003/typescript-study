class User1{
    name:string
    static totalUsers:number=0
    constructor(name:string){
        this.name=name
        User1.totalUsers++;
    }
    getName(){
        return this.name
    }
    static getTotal(){
        return User1.totalUsers
    }
}

console.log(User1.totalUsers)
const users1=new User1("Anu")
const users2=new User1("Deepsea")
console.log(users1.getName(),users2.getName(),User1.getTotal(),User1.totalUsers)