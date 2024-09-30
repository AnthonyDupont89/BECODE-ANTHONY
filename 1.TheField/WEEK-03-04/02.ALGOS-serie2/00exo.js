let countTrue = (array) => {
    let count = 0;
    for (let value of array) {
        value ? count++ : count;
    }
    console.log(count);
}



// let countTrue = (array) => {
//     let count = 0;
//     array.forEach(value => {
//         if (value) {
//             count++;
//         }
//     });
//     console.log(count);
// }

// let countTrue = (array) => {
//     let count = 0;
//     array.forEach(value => value && count++);
//     console.log(count);
// }



// let countTrue = (array) => {
//     let count = array.reduce((accumulator, value) => value ? accumulator + 1 : accumulator, 0);
//     console.log(count);
// }



// let countTrue = (array) => {
//     let count = array.filter(value => value).length;
//     console.log(count);
// }





countTrue([true, false, false, true, false]);
countTrue([false, false, false, false]);
countTrue([]);



