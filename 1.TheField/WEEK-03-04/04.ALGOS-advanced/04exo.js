
let reverseWord = (string) => {
    string = string.split(" ").map(word => word.split('').reverse().join("")).join(" ");
    console.log(string);
}

reverseWord("This is a string of words") // "siht si a gnirts fo sdrow"



let reverseWord0 = (string) => {
    string = string.split(" ").map(word => word.split("").reverse().join("")).join(" ");
    console.log(string);
}

reverseWord0("Hello world"); // "olleH dlrow"
