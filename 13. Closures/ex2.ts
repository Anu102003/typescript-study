//with closure
function createCounter(){
    let counterValue=0
    return{
        increment:function(){
            counterValue++
        },
        getCounter:function(){
            return counterValue
        },
        decrement:function(){
            return counterValue--
        }
    }
}

const counter=createCounter()
counter.increment()
console.log(counter.getCounter())

const counter2=createCounter()
counter2.increment()
counter2.increment()
console.log(counter2.getCounter())