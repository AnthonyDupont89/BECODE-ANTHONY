parent.addEventListener("click", (e) => {
  console.log(e.target);
});

parent.addEventListener("click", (e) => {
  if (e.target.innerText === "One") {
    alert("You clicked the first button");
  }

  if (e.target.innerText === "Two") {
    alert("Elodie loves cats");
  }

  if (e.target.innerText === "Three") {
    alert("I am so happy !");
  }
  // etc...
});


// TOUT LE DOCUMENT EST ÉCOUTER
document.addEventListener("click", (e) => {
  if (e.target.matches(".my-class")) {
    // Handle clicks on the elements with "my-class" class
    
  }
  if (e.target.matches("li")) {
    // Handle clicks on all li in the page
  }
  // etc
});