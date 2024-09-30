let num = 10 +2;

if (num > 2 && num < 20) {
    console.log("TRUE"); 
} else {
    console.log("FALSE");
}


let user = "employee";

if (user === "guest") {
    console.log("Login Denied");
} else if (user === "employee") {
    console.log("Succesfully Logged in");
}



let name = "Anthony";
let nameLength = name.length;

if (nameLength > 5) {
    alert("More than 5 letters")
} else if (nameLength == 5) {
    alert("Exaclty 5 letters")
} else {
    alert("Less than 5 letters")
}