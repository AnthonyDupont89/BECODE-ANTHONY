/* document.querySelector("button").addEventListener("click", () => {
  alert("button was clicked");
});

document.querySelector("p").addEventListener("click", () => {
  alert("paragraph was clicked")
})

// PointerEvent object
document.querySelector("button").addEventListener("click", (event) => {
  console.log(event);
}); */


const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("button was clicked");
});

p.addEventListener("click", () => {
  alert("paragraph was clicked");
});