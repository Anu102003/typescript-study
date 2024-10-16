function concat(a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
}
var x = concat("1", "2", "3");
var y = concat("1", "2");
console.log(x, y);
