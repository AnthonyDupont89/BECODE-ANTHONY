let detectWord = function (string) {
    let word = "";
    for (letter of string) {
        letter == letter.toLowerCase() ? word += letter : word = word;
    }
    console.log(word);
}

detectWord("UcUNFYGaFYFYGtNUH");
detectWord("bEEFGBuFBRrHgUHlNFYaYr");
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");