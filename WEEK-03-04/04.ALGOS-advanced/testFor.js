let tableau = ["un", "deux", "trois"];

// for (let i = 0; i < tableau.length; i++) {
//     for (let j = 0; j < tableau.length; j++) {
//         console.log(`Comparaison de ${tableau[i]} avec ${tableau[j]}`);
//     }
// }



// tableau.forEach((elementExterne) => {
//     tableau.forEach((elementInterne) => {
//         console.log(`Comparaison de ${elementExterne} avec ${elementInterne}`);
//     });
// });

// let tableau1 = ["un", "deux", "trois"];
// let tableau2 = ["quatre", "cinq", "six"];

// tableau1.forEach((elementTableau1) => {
//     tableau2.forEach((elementTableau2) => {
//         console.log(`Comparaison de ${elementTableau1} avec ${elementTableau2}`);
//     });
// });



// tableau.forEach((elementExterne, indexExterne) => {
//     tableau.forEach((elementInterne, indexInterne) => {
//         if (indexExterne !== indexInterne) {
//             console.log(`Comparaison de ${elementExterne} avec ${elementInterne}`);
//         }
//     });
// });



// tableau.map((elementExterne) => {
//     let autresElements = tableau.filter((elementInterne) => elementInterne !== elementExterne);
//     autresElements.forEach((element) => {
//         console.log(`Comparaison de ${elementExterne} avec ${element}`);
//     });
// });



// tableau.forEach((elementExterne, indexExterne) => {
//     tableau.slice(indexExterne + 1).forEach((elementInterne) => {
//         console.log(`Comparaison de ${elementExterne} avec ${elementInterne}`);
//     });
// });

// console.log(tableau);


// tableau.forEach((_, index) => {
//         console.log(tableau.slice(index + 1))
// });


// tableau.forEach((_, index) => {
//     if (index+1 <= tableau.length-1) {
//         console.log(tableau.slice(index + 1));
//     }
// });

tableau.forEach((elementExterne) => {
    tableau.forEach((elementInterne) => {
        console.log(`Comparaison de ${elementExterne} avec ${elementInterne}`);
    });
});



tableau.forEach((elementExterne, indexExterne) => {
    tableau.forEach((elementInterne, indexInterne) => {
        if (indexExterne !== indexInterne) {
            console.log(`Comparaison de ${elementExterne} avec ${elementInterne}`);
        }
    });
});



tableau.forEach((elementExterne, indexExterne) => {
    tableau.slice(indexExterne + 1).forEach((elementInterne) => {
        console.log(`Comparaison de ${elementExterne} avec ${elementInterne}`);
    });
});




