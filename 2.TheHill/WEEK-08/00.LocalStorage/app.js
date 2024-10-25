const myArr = [1, true, "hello"];
const myStringFromArr = JSON.stringify(myArr);

console.log(myStringFromArr);

// Will log the string : "[1, true, 'hello']". This is a string !

myArrBackFromStr = JSON.parse(myStringFromArr);

console.log(myArrBackFromStr);

// Will log the array [1, true, 'hello']. This is an array !


const array = 
  ["Anthony", "Dupont",
  25, "rue du Noyer",
  1000, "Bruxelles"];
console.log(array);

const arrayToString = JSON.stringify(array);
console.log(arrayToString);

const stringToArray = JSON.parse(arrayToString);
console.log(stringToArray);


