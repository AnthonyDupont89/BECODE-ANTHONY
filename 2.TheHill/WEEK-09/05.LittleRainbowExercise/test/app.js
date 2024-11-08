
// const maPromesse = new Promise((resolve, reject) => {
//   resolve(); // Aucune valeur n'est transmise
// });

// maPromesse.then((resultat) => {
//   console.log(resultat); // Affichera "undefined" car `resolve` n'a rien transmis
// });






// const sum = ((num1, num2) => {
//   return new Promise((resolve, reject) => {
//     const result = num1 + num2
//     resolve(result);
//   });
// })

// sum(1, 2)
// .then((result) => {
//   console.log(result);
// })




const pendingPromise = new Promise((resolve, reject) => {
  resolve; // resolve et reject sont des fonctions,
  reject;  // elles ont donc besoin de parenthèse pour être appelée
});
console.log(pendingPromise);



const resolvePromise = new Promise((resolve, reject) => {
  resolve("resolve")
});
resolvePromise.then(result => {
  console.log(resolvePromise);
  console.log(result);
});



const rejectPromise = new Promise((resolve, reject) => {
  reject("reject")
});
rejectPromise.catch((result) => {
  console.log(rejectPromise);
  console.log(result);
})



const myPromise = new Promise((resolve, reject) => {
  
})