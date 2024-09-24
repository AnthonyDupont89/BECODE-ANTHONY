
let getTotalPrice = (groceries) => {
    let totalPrice = 0;
    for (let grocery in groceries) {
        let price = groceries[grocery].quantity*groceries[grocery].price*100;
        totalPrice += price;
    }
    console.log(totalPrice/100);
};

/* EXPLICATION *100/100
    le format IEEE 754 utilisé par JavaScript
    pour représenter les nombres en mémoires
    peut entrainer des erreurs d'arrondi avec les float */


// 1 bottle of milk:
getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
]) // 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
]) // 4

// 3 bottles of milk:
getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
]) // 4.5

// Several groceries:
getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]) // 10.4

// Some cheap candy:
getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
]) // 0.3


// groceries.forEach(grocery => {
//     console.log(grocery.quantity*grocery.price);
// });