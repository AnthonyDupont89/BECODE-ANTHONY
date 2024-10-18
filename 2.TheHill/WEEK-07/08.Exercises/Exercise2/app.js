const divs = document.querySelectorAll("div")

divs.forEach(div => {
  const button = div.querySelector("button");
  const paragraph = div.querySelector("p");

  button.addEventListener("click", () => {
    paragraph.classList.toggle("hidden")
  })
}) 





// chatGPT

/* const tab = (event) => {
  const div = event.target.closest("div");
  const paragraph = div.querySelector("p");
  paragraph.classList.toggle("hidden");
}

divs.forEach(div => {
  const button = div.querySelector("button");
  button.addEventListener("click", tab);
}); */



/* const Paragraph = (event) => {
  if (event.target.tagName === "BUTTON") { // Vérifie que l'événement est déclenché par un bouton
    const paragraph = event.currentTarget.querySelector("p"); // Sélectionne le 'p' dans la 'div'
    paragraph.classList.toggle("hidden"); // Ajoute ou enlève la classe 'hidden'
  }
}

divs.forEach(div => {
  div.addEventListener("click", Paragraph); // Attache l'écouteur à la 'div'
}); */
