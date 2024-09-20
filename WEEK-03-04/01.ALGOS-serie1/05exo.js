const drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
]

let sortDrinkByPrice = function (array) {
    drinks.sort((drink1, drink2) => {
        return drink1.price - drink2.price;
    });
    console.log(array);
}
sortDrinkByPrice(drinks);



let sortDrinkByName = drinks => {
    drinks.sort((drink1, drink2) => {
        return drink1.name.localeCompare(drink2.name);
    });
    console.log(drinks);
}
sortDrinkByName(drinks);



let sortDrinkByName1 = drinks => {
    drinks.sort((drink1, drink2) => drink1.name > drink2.name ? 1 : -1);
    console.log(drinks);
}
sortDrinkByName1(drinks);
