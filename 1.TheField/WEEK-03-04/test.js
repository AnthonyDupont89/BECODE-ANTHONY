let array = [0, false, 1, true, 2, "yes", null, undefined];

let newArray = array.filter(value => {
    return value;
});


let newArray2 = array.filter(value => value);


console.log(array);
console.log(newArray);
console.log(newArray2);
