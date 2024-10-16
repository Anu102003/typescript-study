//without closure
let counterValue=0
function increment(){
    counterValue++
}

function getCounter(){
    return counterValue
}
increment()
console.log(getCounter())
increment()
console.log(getCounter())