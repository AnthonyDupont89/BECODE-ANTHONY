let sevenBoom = (array) => {
    let arrayDigit = [];
    for (let num in array) {
        array[num] = array[num].toString();
        array[num] = array[num].split("");
        arrayDigit.push(array[num])
    }
    console.log(arrayDigit);
    arrayDigit = arrayDigit.flat();
    console.log(arrayDigit);
    
    let digit = arrayDigit.find((digit) => {
        return digit == 7;
    });
    digit == 7? console.log("Boom!") : console.log("there is no 7 in the array");
}

// PISTE D'AMÉLIORATION
// let array=[1,2,3];
// let array2=[4,5];
// console.log(array.push(...array2));
// console.log(array);


// SOLUTION TIMMY :
// const sevenBoom=array=>array.some(el=>el.toString().split("").includes("7"))?"Boom!":"There is no 7 in the array";


sevenBoom([1, 2, 3, 4, 5, 6, 7]) // "Boom!"
// 7 contains the number seven.
sevenBoom([8, 6, 33, 100]) // "there is no 7 in the array"
// None of the items contain 7 within them.
sevenBoom([2, 55, 60, 97, 86]) // "Boom!"
// 97 contains the number seven.