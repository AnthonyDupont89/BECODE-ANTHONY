/* let yourName = prompt("Enters your name :")
let favAnimal; 

while (favAnimal !== "cats" && favAnimal !== "dogs") {
    favAnimal = prompt("Which do you prefer, cats or dogs?")
    
    switch (favAnimal) {
        case "cats":
            alert(`I completely agree with you ${yourName}, cats are more independent!`)
            break;
        case "dogs":
            alert(`Same here ${yourName}, dogs are definitely more friendly!`)
            break;
        default:
            alert(`${favAnimal} is not in the choices ${yourName}, try again...`)
            break;
    }
} */





/* const mystery = "Poules (7) de cristals"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
    console.log("YOU GOT IT!!!");
} else {
    console.log("TRY AGAIN");
} */





/* let age;
while (isNaN (parseInt(age)) || age < 0) {
    age = prompt('How old are you?');
}

if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off")
} else if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else if (age > 18){
    alert("Powering On. Enjoy the ride!")
} */






/* What fruit?

Ask the user what is his favorite fruit.
If it's bananas, tell him you like bananas as well.
If it's strawberry, tell him you LOVE strawberries.
If it's grape, aks him if he prefers purple or green grapes.
If it's purple, tell him you don't like purple grapes.
If it's green, tell him green grapes are ok...
If it's not purple or green, tell him you don't understand.
If it's another thing, tell him you don't understand the word he said (displaying the word he said).
Think like a programmer !

DRY !!!!! (Don't Repeat Yourself).
What if the person puts Bananas instead of bananas ?
Try to think the more efficient way to get to your goal */

let fruit = prompt("What is your favorite fruit?");
switch (fruit.toLowerCase()) {
    case 'bananas':
        alert("I like bananas as well.")
        break;
    case 'strawberry':
        alert("I LOVE strawberries.")
        break;
    case 'grape':
        let grape = prompt("Which one do you prefer : purple or green grapes?");
        switch (grape.toLowerCase()) {
            case 'purple':
                alert("I don't like purple grapes.")
                break;
            case 'green':
                alert("Green grapes are ok...")
                break;
            default:
                alert("I don't understand")
                break;
        }
        break;
    default:
        alert(`I don't understand that word : ${fruit}`)
        break;
}