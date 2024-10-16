//without access modifiers
class Userss {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.age = age,
            this.name = name
    }
}
const userss=new Userss("Anu",21)
console.log(userss.name,userss.age)
userss.name="Deep"
userss.age=40
console.log(userss.name,userss.age)
