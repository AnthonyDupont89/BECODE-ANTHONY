let maxNum;
let guessNum;
let attempts = 0;

while (isNaN(parseInt(maxNum))) {
    maxNum = prompt("Enter a number :")
}

let randNum = Math.floor(Math.random() * maxNum + 1);

while (guessNum != randNum) {
    guessNum = prompt(`Guess the number I picked in a range from 1 to ${maxNum} :`)
    attempts++
    if (isNaN(parseInt(guessNum))) {
        alert("It's not a valid answer...")
    } else if (guessNum < randNum) {
        alert(`${guessNum} is lower, try again!`)
    } else if (guessNum > randNum) {
        alert(`${guessNum} is higher, try again!`)
    } else if(guessNum == randNum) {
        alert(`Congratulation! the right number was ${guessNum}. It took you ${attempts} attempts to find it.`)
    }
}



