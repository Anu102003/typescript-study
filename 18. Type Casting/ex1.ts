interface User{
    name:string,
    age:number
}
const jsonData='{"name":"Anu","age":24}'
//before 
const user=JSON.parse(jsonData) 
console.log(`Name ${user.name} Age ${user.age} Email ${user.email}`)

//after typecasting
const userT=JSON.parse(jsonData) as User
//shows error
console.log(`Name ${userT.name} Age ${userT.age} Email ${userT.email}`)