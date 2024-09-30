const product = {
    name: "iPhone 15",
    inStock: true,
    price: 1249.90,
    includedInPackage: ["case", "earphones", "charger"]
};

console.log(product.includedInPackage[1]);





//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:

// VERSION 1
let fullAdress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
console.log(fullAdress);



// VERSION 2
// Destructuration de l'objet restaurant
const {name, address, city, state, zipcode} = restaurant;
// extrait les valeurs des propriétés name, address, city, state, et zipcode de l'objet restaurant
// et les assignes directement à des variables portant le même nom,
// directement utilisable dans le template literal sans avoir à répéter restaurant. à chaque fois

let fullAdressD = `${address}, ${city}, ${state}, ${zipcode}`;
console.log(fullAdressD);




