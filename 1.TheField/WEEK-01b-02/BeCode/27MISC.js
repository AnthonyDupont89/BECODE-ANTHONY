// TRY/CATCH
try {
    console.log(hello);
} catch {
    console.log("The above code didn't work");
}

console.log("End of program");



// DEFAULT PARAMS
const multiplication = (num1 = 1, num2 = 3) => num1 * num2;

console.log(multiplication(3, 5));
console.log(multiplication());



// SPREAD OPERATOR
const arr0 = ["cat", "dog"];
const arr1 = [...arr0, "panda"];

console.log(arr1);


const arr2 = ["cat", "dog"];
const arr3 = ["panda"];

let newArray = [];
newArray = arr2.concat(arr3);
console.log(newArray);



// Let's copy the arrayOne !
const arrayOne = [1, 2, 3, 4];

const arrayTwo = [...arrayOne];

// arrayOne.push(5);

console.log(arrayOne);
console.log(arrayTwo);



const arrayThree = arrayOne.slice();
console.log(arrayThree); // [1, 2, 3, 4]

const arrayFour = [].concat(arrayOne);
console.log(arrayFour); // [1, 2, 3, 4]

const arrayFive = Array.from(arrayOne);
console.log(arrayFive); // [1, 2, 3, 4]

const arraySix = arrayOne.map(item => item);
console.log(arraySix); // [1, 2, 3, 4]





// DESTRUCTURING
const myObject = {
    firstName: "William",
    lastName: "Wallace",
    age: 37,
    profession: "warrior",
};

// const firstName = myObject.firstName;
// const lastName = myObject.lastName;
// const age = myObject.age;
// const profession = myObject.profession;

const { firstName, lastName, age, profession } = myObject;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(profession);



// setTimeout()
console.log("Hello!");

setTimeout(() => {
    console.log("I've been logged 2 seconds after the first log");
}, 2000);



// setInterval()
const timer = setInterval(() => {
    console.log("hello");
}, 2000);

clearInterval(timer);



// Dates
let date = new Date();
console.log(date);