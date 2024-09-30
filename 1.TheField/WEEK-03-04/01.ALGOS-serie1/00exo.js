console.log("hello");

let makesTen = function(a, b) {
    let sum = a + b;
    console.log(sum == 10 || a == 10 || b == 10);
}

makesTen(9, 10) // true
makesTen(9, 9) // false
makesTen(1, 9) // true