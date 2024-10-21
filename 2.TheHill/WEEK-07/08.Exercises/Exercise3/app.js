const button = document.querySelector("button");

button.addEventListener("click", () => {
  let num1 = Math.floor(Math.random() * 256);
  let num2 = Math.floor(Math.random() * 256);
  let num3 = Math.floor(Math.random() * 256);

  const h1 = document.querySelector("h1")
  h1.innerText = `background-color: rgb(${num1}, ${num2}, ${num3});`;

  const body = document.querySelector("body")
  body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
})

