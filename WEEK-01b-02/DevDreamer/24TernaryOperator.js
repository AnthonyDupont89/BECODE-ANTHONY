let age = 18;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("Sorry, you can't vote");
}

let message0 = age >= 18 ? "You can vote" : "Sorry, you can't vote";
console.log(message0);


let password = "redruby123";
let message1 = (password === "redruby123") ? 'Success' : 'Fail'; // Parentheses are not necessary; they just improve readability
console.log(message1);



let body = document.querySelector('body');
let choice = '';
choice === 'dark' ? body.classList.add('darkMode') : null; 



let message = '';

if (1 > 10) {
    message = 'Condition is TRUE';
} else {
    message = 'Condition is FALSE';
}
console.log(message);


message = 1 > 10 ? 'Condition is TRUE' : 'Condition is FALSE';
console.log(message);


let time = '11:00';
let greeting = time < '12:00' ? 'Good Morning' : 'Good Evening'; // !! Comparaison lexicographique (valeurs Unicode)
console.log(greeting);