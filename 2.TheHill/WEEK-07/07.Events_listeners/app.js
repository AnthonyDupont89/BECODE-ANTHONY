const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   alert("the button has been clicked");
// });


const alertBtn = () => {
  alert("the button has been clicked");
};

button.addEventListener("click", alertBtn);