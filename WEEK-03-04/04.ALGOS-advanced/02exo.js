isPalindrome = (string) => {
    string = string.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    if (string.length%2) {
        let str = string.slice(0, (string.length-1)/2).toLowerCase();
        let ing = string.slice(((string.length+1)/2), string.length).toLowerCase().split("").reverse().join("");
        console.log(str == ing);
    } else {
        let str = string.slice(0, (string.length)/2).toLowerCase();
        let ing = string.slice(((string.length)/2), string.length).toLowerCase().split("").reverse().join("");
        console.log(str == ing);
    }
}

isPalindrome("kayak") // true
isPalindrome("race car") // true
isPalindrome("hello world") // false
isPalindrome("Madam, I'm Adam") // true
