// // odd numbers
// for (let i=2 ; i <= 20 ; i+=2) {
//     console.log(i);
// }

// // even numbers
// for (let i=1 ; i <= 20 ; i+=2) {
//     console.log(i);
// }



// for (let i=100 ; i >= 1 ; i-=10) {
//     console.log(i);
// }



// for (let i=25 ; i>=0 ; i-=5) {
//     console.log(i);    
// }



// for (let i=10 ; i<=1000 ; i*=10) {
//     console.log(i);
// }





// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];

// for(let i = animals.length-1; i >= 0; i--) {
//     console.log(animals[i]);
// }





// const users = [
//     {
//         firstName: "Vito",
//         lastName: "Corleone",
//     },
//     {
//         firstName: "William",
//         lastName: "Wallace",
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//     },
//     {
//         firstName: "Amadeus",
//         lastName: "Mozart",
//     },
//     {
//         firstName: "Barack",
//         lastName: "Obama",
//     },
// ];


// // VERSION 1
// for(let i = 0; i < users.length; i++) {
//     let fullName = `${users[i].firstName} ${users[i].lastName}`;
//     console.log(`${i+1}. ${fullName}`);
// }

// // VERSION 2
// for(let i = 0; i < users.length; i++) {
//     console.log(`${i+1}. My full name is ${users[i].firstName} ${users[i].lastName}`);
// }



const seatingChart = [ 
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
];

// I can use nested loops to do that :

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    console.log(`ROW #${i+1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}








