const clickHere = document.querySelector(".clickHere");
const cross = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");

clickHere.addEventListener("click", () => {
  overlay.style.display = "block";
});

overlay.addEventListener("click", (event) => {
  if (event.target == event.currentTarget || event.target == cross) {
    overlay.style.display = "none"; 
  }
})