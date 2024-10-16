//with access modifiers
class Users1 {
    private name: string; //only accessed within class not in obj
    private age: number
    constructor(name: string, age: number) {
        this.age = age,
        this.name = name
    }
    public getName(){return this.name} // default it is public
    public getAge(){return this.age}

    public setName(name:string){ this.name=name} // default it is public
    public setAge(age:number){ 
        if(age>0){
             this.age=age
        }
    }
}
const users1 = new Users1("Anu", 21)
console.log(users1.getName(),users1.getAge())
users1.setName("Deepsea")
users1.setAge(20)
console.log(users1.getName(),users1.getAge(),"seting +ve age ")
users1.setAge(-40)
console.log(users1.getName(),users1.getAge(),"seting -ve age ")

