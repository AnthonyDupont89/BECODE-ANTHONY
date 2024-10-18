const myList = document.querySelector("ul");
const myItem = document.createElement("li");

myItem.textContent = "hello"

myList.appendChild(myItem);
// myItem.remove();

// Créer deux éléments <li> et les ajouter à la liste
for (let i = 0; i < 2; i++) {
    const myItem = document.createElement("li");
    myItem.textContent = `Itération ${i + 1}`; // Ajoute un texte unique à chaque <li>
    myList.appendChild(myItem);
}


// Créer deux éléments <li> et les ajouter à la liste
for (let i = 0; i < 2; i++) {
    const myItem = document.createElement("li");
    myItem.textContent = ""; // Ajoute un texte unique à chaque <li>
    myList.appendChild(myItem);
}



