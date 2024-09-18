let date = new Date();
console.log(date);

let hour = date.getHours();
let min = date.getMinutes();
console.log(`${hour}:${min}`);

let day = date.toLocaleString('default', {weekday: 'long'})
console.log(day);



// !! l'objet est un reference type
let date1 = new Date(2024, 8, 18);  // 18 septembre 2024
let date2 = date1;  // Copie la référence de l'objet Date

// Modifier la date via `date2`
date2.setFullYear(2025);  // Change l'année à 2025

console.log(date1);  // Affiche 18 septembre 2025 (modifié via `date2`)
console.log(date2);  // Affiche 18 septembre 2025 (car les deux variables partagent la même référence)

