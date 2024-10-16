class Calculator{
    add(a:number,b:number){
        console.log(`Calling add method with arguments ${a},${b}`)
        const result=a+b
        console.log(`Result : ${result}`)
        return result
    }
    substract(a:number,b:number){
        console.log(`Calling substract method with arguments ${a},${b}`)
        const result=a-b
        console.log(`Result : ${result}`)
        return result
    }
}
const calculator=new Calculator()
calculator.add(5,3)
calculator.substract(7,2)