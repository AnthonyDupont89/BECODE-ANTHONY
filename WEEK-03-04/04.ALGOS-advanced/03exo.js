let caesarCipher = (str, num) => {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    console.log(str);
    
    let ciphertext = "";
    for (char of str.toLowerCase()) {
        if (alphabet.includes(char)) {
            let letterAlphabet;
            if (alphabet.indexOf(char) < 24 && num >= 0) {
                letterAlphabet = alphabet[alphabet.indexOf(char)+num%26];
            } else if (alphabet.indexOf(char) >= 24 && num >= 0) {
                letterAlphabet = alphabet[alphabet.indexOf(char)-26+num%26];
            } else if (alphabet.indexOf(char) > 1 && num < 0) {
                letterAlphabet = alphabet[alphabet.indexOf(char)+num%26];
            } else if (alphabet.indexOf(char) <= 1 && num < 0) {
                letterAlphabet = alphabet[alphabet.indexOf(char)+26+num%26];
            }
            ciphertext += letterAlphabet;
        } if (!alphabet.includes(char)) {
            ciphertext += char;
        }
    }
    console.log(ciphertext);
}

caesarCipher("zoo keeper", 2) // "bqq mggrgt"
caesarCipher("bqq mggrgt", -2) // "zoo keeper"
caesarCipher("My name is Henrique", 3) // "pb qdph lv khqultxh "