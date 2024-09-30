let calculator = (num1, op, num2) => {
    switch (op) {
        case "+":
            console.log(num1+num2);
            break;
        case "*":
            console.log(num1*num2);
            break;
        case "/":
            console.log(num1/num2);
            break;
        default:
            break;
    }
}

calculator(2, "+", 2) // 4
calculator(2, "*", 2) // 4
calculator(4, "/", 2) // 2