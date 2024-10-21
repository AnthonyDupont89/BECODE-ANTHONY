const element = document.querySelector("body");

const myFunc = () => {
  console.log("clicked");
};

element.addEventListener("click", myFunc);

// Then you can later remove the event listener specifying that it should remove the "click" event to this specific function.

// element.removeEventListener("click", myFunc);