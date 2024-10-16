//with closure
function createCounter() {
    var counterValue = 0;
    return {
        increment: function () {
            counterValue++;
        },
        getCounter: function () {
            return counterValue;
        },
        decrement: function () {
            return counterValue--;
        }
    };
}
var counter = createCounter();
counter.increment();
console.log(counter.getCounter());
var counter2 = createCounter();
counter2.increment();
counter2.increment();
console.log(counter2.getCounter());
