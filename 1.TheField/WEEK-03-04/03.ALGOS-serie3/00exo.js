let oddishOrEvenish = (num) => {
    console.log(`${num} is a ${typeof num}`);

    num = num.toString();
    console.log(`${num} is a ${typeof num}`);
    
    num = num.split("");
    console.log(num);

    num = num.map((value) => 
        parseInt(value));
    console.log(num);
    
    const sum = num.reduce((total, value) => {
        return total + value;
    })
    console.log(sum);
    
    sum % 2 == 0? console.log("Evenish") : console.log("Oddish");
}


oddishOrEvenish(43) // "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) // "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) // "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0