let calcAge = function(age) {
    age >= 0 ? console.log(age * 365)
    : console.log("Your age should be greater or equal to zero");
}

calcAge(65);
calcAge(0);
calcAge(20);