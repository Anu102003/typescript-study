function concat(a:string,b:string,c:string="cat"){
    return a+b+c
}
const x=concat("1","2","3")
const y=concat("1","2")
console.log(x,y)