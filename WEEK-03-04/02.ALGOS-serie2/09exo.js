
let reverseWords = (string) => {
    string = string.split(" ").filter((truthy) => {
        return truthy;
    }).reverse().join(" ");
    
    console.log(string);
}

reverseWords(" the sky is blue") // "blue is sky the"
reverseWords("hello   world!  ") // "world! hello"
reverseWords("a good example") // "example good a"


