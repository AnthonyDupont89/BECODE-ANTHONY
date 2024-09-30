let isSmooth = (string) => {
    array = string.split(" ");
    
    lastLetters = "";
    for (let i = 0; i < array.length-1; i++) {
        lastLetters += array[i].charAt(array[i].length-1).toLowerCase();
    }
    
    let firstLetters = ""
    for (let i = 1; i < array.length; i++) {
        firstLetters += array[i].charAt(0).toLowerCase();    
    }
    
    // lastLetters === firstLetters?
    //     console.log(`${lastLetters} === ${firstLetters}`) :
    //     console.log(`${lastLetters} !== ${firstLetters}`);
    
    console.log(lastLetters === firstLetters);
}


// SOLUTION TIMMY
// const isSmooth=(str)=>{
//     let array=str.split(" ");
//     return array.every((elem, i) =>
//     i === array.length - 1?true:elem[elem.length-1]===array[i + 1][0]);
// }



isSmooth("Marta appreciated deep perpendicular right trapezoids") // true
isSmooth("Someone is outside the doorway") // false
isSmooth("She eats super righteously") // true