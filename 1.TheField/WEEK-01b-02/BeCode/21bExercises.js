function dies (faces, times) {
    for (let i = 1; i <= times; i++) {
        let result = Math.floor(Math.random() * faces+1);
        console.log(`Die ${i}: ${result}`);
    }
}
dies(6, 5);




function string0 (characters, times) {
    let concat = []
    for (let i = 1; i <= times; i++) {
        concat.push(characters)
    }
    console.log(concat.join(""));
}
string0("$", 5);


function string1 (characters, times) {
    let concat = "";
    for (let i = 1; i <= times; i++) {
        concat += characters; // concat =  concat + characters
    }
    console.log(concat);
}
string1("$", 5);


function string (character, times) {
    console.log(character.repeat(times))
}
string("$", 5)



function greet (firstName, lastName) {
    let fullName = `${firstName} ${lastName.slice(0, 1)}.`;
    console.log(`This is ${fullName}`);
}
greet("Marlon", "Brandon");




function sum (num1, num2) {
    return num1 + num2;    
}
const myVariable = sum(3, 6);
console.log(myVariable);




function logs() {
    console.log("Hello");
    console.log("World");
    return 4;
    console.log("Goodbye");
    console.log("World");
}

const myVariable2 = logs();
console.log(myVariable2);




function isShortWeather (temperature) {
    console.log(temperature >= 24);
}
isShortWeather(13); // false
isShortWeather(27); // true
isShortWeather(-7); // false




function lastElement0 (array) {
    if (array.length == 0) {
        console.log(null);
    } else {
        console.log(array.at(array.length-1));
    }
}

function lastElement1 (array) {
    if (array == 0) {   // coerction de types en JavaScript : un tableau vide est converti en une valeur falsy, équivalente à false ou 0
        console.log(null);
    } else {
        console.log(array.at(array.length-1));
    }
}

function lastElement2 (array) {
    console.log(array.at(-1) || null) ; // if true or if false
}


function lastElement (array) {
    console.log(array[array.length-1] || null) ;
}

lastElement([3, 5, 7]); //7
lastElement([1]); //1
lastElement0([]); //null




function capitalize (string) {
    string = string.slice(0, 1).toUpperCase()+string.slice(1, string.length);
    console.log(string);
    
}
capitalize("eggplant"); // "Eggplant"
capitalize("pamplemousse"); // "Pamplemousse"
capitalize("squid"); //"Squid"




function sumArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

sumArray([1, 2, 3]); // 6
sumArray([2, 2, 2, 2]); // 8
sumArray([50, 50, 1]); // 101




function returnDay (day) {
    let week = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(week[day-1] || null);
}
returnDay(1); // "Monday"
returnDay(7); // "Sunday"
returnDay(4); // "Thursday"
returnDay(0); // null