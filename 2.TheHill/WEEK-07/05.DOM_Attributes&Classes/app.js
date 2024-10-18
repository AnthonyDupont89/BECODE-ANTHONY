// setAttribute("id", "my-awesome-id");
// getAttribute("id");
// removeAttribute("id");


const parag = document.querySelector("p");
console.log(parag.classList);

parag.classList.add("hello");
console.log(parag.classList);

parag.classList.add("goodbye");
console.log(parag.classList);

parag.classList = "one two three";
console.log(parag.classList);

parag.classList.remove("two");
console.log(parag.classList);


console.log(parag.classList.contains("one"));
console.log(parag.classList.contains("two"));



// document.querySelector("p").classList.toggle("red"); // Will remove red from the classes of p
// console.log(document.querySelector("p").classList);


// // If you do it again :
// document.querySelector("p").classList.toggle("red"); // It will add back the class red
// console.log(document.querySelector("p").classList);



const obj = { name: 'Anthony' };
console.log(obj);  // Tu logues la référence dynamique
// Ensuite, tu modifies l'objet
obj.name = 'Zoe';
console.log(obj); 
// Si tu déroules "obj" dans la console après cette modification
// il montrera { name: 'Zoe' } car la référence dynamique a été mise à jour



const block = document.querySelector(".block");

if (block.dataset.direction === "top" && block.dataset.duration === "400") {
  console.log(block.dataset); // Do something nice ! 
}
