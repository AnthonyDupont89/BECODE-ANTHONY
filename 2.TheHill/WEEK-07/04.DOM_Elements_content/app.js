const listItem = document.querySelector("ul");
let firstListItem = document.querySelectorAll("li.list-item")[0];

let anotherListItem = document.createElement("li");
anotherListItem.classList.add("list-item");
anotherListItem.innerText = firstListItem.innerText;
listItem.appendChild(anotherListItem);

listItem.style.color = "purple";
listItem.children[5].style.color = "gold";
listItem.children[3].innerHTML = "Annie <span>Hall</span>" ;

listItem.querySelector("li:nth-child(4) span").style.color = "blue";
listItem.children[3].querySelector("span").style.color = "red";
