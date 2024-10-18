const bold = document.querySelector("b");
bold.style.color = "red";

const body = document.querySelector("body");
body.style.backgroundColor = "beige";

const part2 = document.querySelector(".part-2")
part2.style.backgroundColor = "darkblue";

const myBtn = document.querySelector(".myBtn");
myBtn.style.color = "pink";

const liPart1 = document.querySelector(".part-1 ul");
liPart1.style.color = "orange";

const aPart1 = document.querySelectorAll(".part-1 a");

aPart1.forEach(a => {
  a.style.color = "green";
});

const h1 = document.querySelector("h1");
h1.style.textTransform = "uppercase";