const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(event); // Affiche toutes les infos relatives à l'événement
  });
})


// *console.log()
//  - event.target
//  - event.target.innertext

