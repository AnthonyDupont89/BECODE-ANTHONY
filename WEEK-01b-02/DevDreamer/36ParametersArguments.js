
let favFood1 = function (response) {
    console.log(`Your favorite food is ${response}`);
}
favFood1('Pizza');



let favFood2 = function (response = "empty, please add your favorite food") {
    console.log(`Your favorite food is ${response}`);
}
favFood2();



let favFood3 = function (response) {
    if (response === undefined) {
    console.log(`Please enter your favorite food!`);
    } else {
        console.log(`Your favorite food is ${response}`);
    }
}
favFood3();