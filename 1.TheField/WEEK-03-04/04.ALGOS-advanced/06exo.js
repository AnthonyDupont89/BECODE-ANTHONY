let twoSums = (numArray, sum) => {
    let sumArray = [];
    numArray.forEach((numEx, indexEx) => {
        numArray.slice(indexEx + 1).forEach((numIn) => {
            if (numEx + numIn == sum) {
                sumArray.push([numIn, numEx]) // "effet de bord"
            }
        });
    });
    console.log(sumArray);
}
// For "sum" = 7
twoSums([1, 6, 4, 5, 3, 3], 7) // [[6,1], [3,4], [3,4]]






// CHAT GPT

// Version .map()
let twoSums0 = (numArray, sum) => {
    let sumArray = numArray.map((numEx, indexEx) => {
        return numArray.slice(indexEx + 1).map((numIn) => {
            return (numEx + numIn === sum) ? [numEx, numIn] : null;
        }).filter(pair => pair !== null);
    }).flat();
    console.log(sumArray);
};
twoSums0([1, 6, 4, 5, 3, 3], 7) // [[6,1], [3,4], [3,4]]


// Version .reduce()
let twoSums1 = (numArray, sum) => {
    return numArray.reduce((acc, numEx, indexEx) => {
        numArray.slice(indexEx + 1).forEach((numIn) => {
            if (numEx + numIn === sum) {
                acc.push([numEx, numIn]);
            }
        });
        return acc;
    }, []);
};
console.log(twoSums1([1, 6, 4, 5, 3, 3], 7)) // [[6,1], [3,4], [3,4]] 


// Version "hash"
// Utilisation d'un objet (ou d'une hashmap) pour éviter les boucles imbriquées
// et améliorer les performances
let twoSums2 = (numArray, sum) => {
    let sumArray = [];
    let numSeen = {};

    numArray.forEach((num) => {
        let complement = sum - num;
        if (numSeen[complement]) {
            sumArray.push([complement, num]);
        }
        numSeen[num] = true;
    });
    console.log(sumArray);
};
twoSums2([1, 6, 4, 5, 3, 3], 7) // [[6,1], [3,4], [3,4]]
