var a = 30;
var b = a;
console.log(a, b);

var c = new Object(40);
var d = c;
console.log(c, d);

var e = new Object(40);

console.log(typeof c, typeof d, c === d);
console.log(c === e);
