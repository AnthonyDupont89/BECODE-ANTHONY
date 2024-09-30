
let toArray = (obj) => {
    let array = [];
    let arrayO = [];
    for (item in obj) {
        array.push(item);
        array.push(obj[item]);
        arrayO.push(array);
        array = [];
    }
    console.log(arrayO);
};



toArray({ a: 1, b: 2 }) // [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) // [["shrimp", 15], ["tots", 12]]
toArray({}) // []
