const button = document.querySelector(".my-btn");
console.log(button);

const mySpan = button.parentElement.previousElementSibling.querySelector("span");
console.log(mySpan);

mySpan.style.color = "red";