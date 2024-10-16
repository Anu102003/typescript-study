interface Employee {
    name: string
    id: number
}
interface Admin {
    access: number
    isAdmin: boolean
}

type AdminEmployee = Employee & Admin

let adminEmployee:AdminEmployee={
    id:123,
    name:"Anu",
    access:2,
    isAdmin:true
}
console.log(adminEmployee,adminEmployee.name)