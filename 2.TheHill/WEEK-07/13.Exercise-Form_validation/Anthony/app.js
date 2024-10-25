const form = document.querySelector("form");

form.addEventListener("change", (element) => {
  let field = element.target.parentElement;
  let input = element.target
  let inputValue = element.target.value;
  let para = element.target.parentElement.querySelector("p");
  
  let isValid = true;

  
  let regex = (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);
  
  

  if (field.matches(".username")) {
    if (inputValue.length < 5 || inputValue.length > 10) {
      input.style.color = "red";
      para.style.display = "block"
      isValid = false;
    } else {
      input.style.color = "green";
      para.style.display = "none";
    }
  }


  if (field.matches(".email")) {
    if (!inputValue.match(regex)) {
        input.style.color = "red";
        para.style.display = "block"
        isValid = false;
      } else {
        input.style.color = "green";
        para.style.display = "none";
      }
    }


  if (field.matches(".password")) {
    if (inputValue.length < 8 || inputValue.length > 10) {
      input.style.color = "red";
      para.style.display = "block"
      isValid = false;
    } else {
      input.style.color = "green";
      para.style.display = "none";
    }
  }
  

  if (field.matches(".passwordConfirm")) {
    let password = document.querySelector(".password input").value;
    if (inputValue != password) {
      input.style.color = "red";
      para.style.display = "block"
      isValid = false;
    } else {
      input.style.color = "green";
      para.style.display = "none";
    }
  }

  document.querySelector(".btn").addEventListener('click', (event) => {
    event.preventDefault();

    if (isValid) {
      console.clear();
      console.log("valid");
    } else {
      console.clear();
      console.log("not valid");
    }
  });
});


// document.querySelector(".btn").addEventListener('click', (event) => {
  // const inputs = document.querySelectorAll("input");
  // // let allGreen = Array.from(inputs).every(input => input.style.color == "green");
  // let allGreen = inputs.forEach(input => {
  //   input.value.style.color == "green";
  // })
  // event.preventDefault();

  // if (isGreen) {
  //   console.log("allgreen");
  // } else {
  //   console.log("not allGreen");
  // }
  
// });



//   if (input.classList.contains("success")) {
    //     input.classList.remove("success");
    //     input.classList.add("error");
    //   } else {
    //     input.classList.add("error");
    //   }
    // } else {
    //   if (input.classList.contains("error")) {
    //     input.classList.remove("error");
    //     input.classList.add("success");
    //   } else {
    //     input.classList.add("success");
    //   }
      // input.innerText.sytle.color = "red"