class Stack<T>{
    private items:T[]=[];
    push(item:T){
        this.items.push(item)
    }
    pop(){
       return this.items.pop()
    }
}
const numGStack=new Stack<number>()
numGStack.push(1)
numGStack.push(2)
console.log(numGStack.pop())

const strGStack=new Stack<string>()
strGStack.push("Hello")
strGStack.push("World")
console.log(strGStack.pop())