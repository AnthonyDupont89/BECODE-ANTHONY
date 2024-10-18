const buttons = document.querySelectorAll("button");

// Version inside function
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.innerText == "Hello") {
      console.log("Oh my God ! You again !!!");
    } else if (button.innerText == "Goodbye") {
      console.log("Thank God ! I thought you'd' never leave !")
    }
  })
})



// Version outside function
const alertBtn = (event) => {
  if(event.target.innerText == "Hello") {
    alert("Oh my God ! You again !!!");
  } else if (event.target.innerText == "Goodbye") {
    alert("Thank God ! I thought you'd' never leave !")
  }
}

buttons.forEach(button => {
  button.addEventListener("click", alertBtn);
})
