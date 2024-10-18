const mainHeading = document.getElementById("main-heading");
const heading = document.querySelector("#main-heading");
const container = document.querySelector(".container");
const list = document.querySelector("ul");

const listItemsT = document.getElementsByTagName("li")
const listItemsQ = list.querySelectorAll("li");


console.log(list);
console.log(Array.isArray(list));
console.log(Array.isArray(Array.from(list)));


Array.from(listItemsT).forEach(li => {
    console.log(li);
});