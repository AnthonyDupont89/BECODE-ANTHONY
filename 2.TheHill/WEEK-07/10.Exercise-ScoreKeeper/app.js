const score = document.querySelector(".score")
let pointsP1 = 0;
let pointsP2 = 0;

let scoreP1 = document.querySelector(".scoreP1")
scoreP1.innerText = pointsP1;
let scoreP2 = document.querySelector(".scoreP2")
scoreP2.innerText = pointsP2;


const scrs = document.querySelectorAll(".scrs button")

document.addEventListener("click", (event) => {
  if (event.target.matches(".scrP1")) {
    scoreP1.innerText = pointsP1 += 1;
  }
  if (event.target.matches(".scrP2")) {
    scoreP2.innerText = pointsP2 += 1;
  }

  if (pointsP1+pointsP2 >= 5) {    
    scrs.forEach(scr => {
      scr.setAttribute("disabled", "");      
    });

    if (pointsP1 > pointsP2) {
      scoreP1.style.color = "green";
      scoreP2.style.color = "red";
    }
  
    else if (pointsP2 > pointsP1) {
      scoreP2.style.color = "green";
      scoreP1.style.color = "red";
    }
  }


  if (event.target.matches(".reset")) {
    pointsP1 = 0;
    scoreP1.style.color = "";
    scoreP1.innerText = pointsP1;
    
    pointsP2 = 0;
    scoreP2.style.color = "";
    scoreP2.innerText = pointsP2;
    scrs.forEach(scr => {
      scr.removeAttribute("disabled", "");      
    });
  }
});




