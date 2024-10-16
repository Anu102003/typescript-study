class NumberStack{
    private items:number[]=[];
    push(item:number){
        this.items.push(item)
    }
    pop(){
       return this.items.pop()
    }
}

class StringStack{
    private items:string[]=[]
    push(item:string){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
}

const numStack=new NumberStack()
numStack.push(1)
numStack.push(2)
console.log(numStack.pop())

const strStack=new StringStack()
strStack.push("Hello")
strStack.push("World")
console.log(strStack.pop())