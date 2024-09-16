let favNum1 = function(num) {
    return `My fav number is ${num}`;
}
console.log(favNum1(9));



function favNum(num) {
    return num;
}
let myFavNum = favNum(7);
console.log(`My fav number is ${myFavNum}`);



function password(a) {
    if (a.length > 8) {
        return console.log(`You chose ${a}`);
    } else {
        return console.log("Not enough letters");
    }
}
password('PurpleRhino123');
password('Circle77')