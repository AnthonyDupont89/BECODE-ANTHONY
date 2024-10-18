



const listItem0 = document.querySelectorAll("ul li");
console.log(listItem0); // __proto__: NodeList (la méthode forEach fonctionne)

const listItem1 = document.getElementsByTagName("li");
console.log(listItem1); // __proto__: HTML Collection (la méthode forEach ne fonctionne pas)

const arrListItem1 = Array.from(listItem1);
console.log(arrListItem1); //




let anotherListItem0 = Object.assign(document.createElement("li"), { 
  className: "list-item", 
  innerText: firstListItem.textContent 
});

let anotherListItem1 = firstListItem.cloneNode(true);


// console.log(listItem.children[3].innerHTML);
// console.log(listItem.children[3].innerText);


