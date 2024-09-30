let reverseOdd = (string) => {
    array = string.split(" ")
    let reverseArray = [];
    for (let word in array) {
        if (array[word].length%2 == 1) {
            let reverseWord = array[word].split("").reverse().join("");
            reverseArray.push(reverseWord);
        } else {
            reverseArray.push(array[word]);
        }
    }
    let reverseString = reverseArray.join(" ")
    console.log(reverseString);
}

reverseOdd("Bananas") // "sananaB"
reverseOdd("One two three four") // "enO owt eerht four"
reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// "Make sure you only reverse words of odd length"