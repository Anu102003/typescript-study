var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numGStack = new Stack();
numGStack.push(1);
numGStack.push(2);
console.log(numGStack.pop());
var strGStack = new Stack();
strGStack.push("Hello");
strGStack.push("World");
console.log(strGStack.pop());
