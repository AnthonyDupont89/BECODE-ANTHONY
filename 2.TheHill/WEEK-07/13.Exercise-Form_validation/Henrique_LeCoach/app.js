const form = document.querySelector("form");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

let errors = [];

const showError = (input, msg) => {
  input.parentElement.classList = "form-control error";
  input.nextElementSibling.innerText = msg;
  errors.push(input);
};

const showSuccess = (input) => {
  input.parentElement.classList = "form-control success";
  errors.filter((el) => el !== input);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errors = [];

  /* TESTS DE CHAQUE INPUT */

  /* USERNAME */

  if (!username.value.trim().length) {
    showError(username, "This is required");
  } else if (
    username.value.length < 5 ||
    username.value !== username.value.toLowerCase()
  ) {
    showError(username, "Must be at least 5 characters and lowercase");
  } else {
    showSuccess(username);
  }

  /* EMAIL */

  if (!email.value.trim().length) {
    showError(email, "This is required");
  } else if (
    !email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    showError(email, "Must be a valid email");
  } else {
    showSuccess(email);
  }

  /* PASSWORD */

  if (!password.value.trim().length) {
    showError(password, "This is required");
  } else if (password.value.length < 8 || password.value.length > 15) {
    showError(password, "Must be at least 8 characters and max 15");
  } else {
    showSuccess(password);
  }

  // PASSWORD 2

  if (!password.value.trim().length) {
    showError(password2, "This is required");
  } else if (password.value !== password2.value) {
    showError(password2, "Password don't match");
  } else {
    showSuccess(password2);
  }

  /* ////////////////////////////// */
  if (!errors.length) {
    console.log("Succes on submitting form");
  } else {
    console.log("Something very bad happened");
  }
});

/* */