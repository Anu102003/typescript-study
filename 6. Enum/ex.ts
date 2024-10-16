enum Direction{
    Up,Down,Left,Right
}
function move(dir:Direction){
    console.log(`Moving ${Direction[dir].toLowerCase()}`)
}
move(Direction.Left)

enum Color{
    Red,Green,Blue
}
let c:Color=Color.Red
console.log(c,Color[c])