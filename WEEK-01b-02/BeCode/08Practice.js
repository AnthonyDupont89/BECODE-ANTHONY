/* let name = prompt("What is you name?");
let age = prompt("What is your age?");
let city = prompt("Where do you live?");

alert(`Your name is ${name}, you are ${age} and you live in ${city}.`); */




/* let exclTax;
while (isNaN(parseFloat(exclTax))) {
    exclTax = parseFloat(prompt("What's the price exclusive of taxe?"))
};
let tax = 0.21;
let inclTax = exclTax + exclTax*tax;

alert(`This is your price with inclusive tax of ${tax} : ${inclTax.toFixed(2)}`);
 */




// Surface of a circle Write an algorithm which receives the radius of a circle and calculate its surface. (prompt and alert) (serach on Google the formula to do it)
/* let radius = prompt("Enter the radius circle :");
while (isNaN(parseFloat(radius))) {
    radius = parseFloat(prompt("Enter the radius circle :"))
};

let circleArea = Math.PI * radius**2;
alert(`Radius : ${radius}
Area circle : ${circleArea.toFixed(2)}`); */




let num1;
let num2;
while (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
    if (isNaN(parseFloat(num1))) 
        {num1 = parseFloat(prompt("Enter a first number :"))}
    
    else if (isNaN(parseFloat(num2)))
        {num2 = parseFloat(prompt("Enter a second number :"))}
};
let sum = num1 + num2;
alert(`The sum of your two numbers is : ${sum}`);