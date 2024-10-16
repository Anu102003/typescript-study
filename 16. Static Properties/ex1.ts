class User{
    name:string
    constructor(name:string){
        this.name=name
    }
    getName(){
        return this.name
    }
}
let totalUsers=0
function createUser(name){
    totalUsers++
    return new User(name)
}
const user1=createUser("Anu")
const user2=createUser("Deepsea")
console.log(user1.getName(),user2.getName(), totalUsers)