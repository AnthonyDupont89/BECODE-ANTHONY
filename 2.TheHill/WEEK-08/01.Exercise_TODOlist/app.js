
const form = document.querySelector("form");
const ol = document.querySelector("ol")

const todoList = localStorage.getItem("todoList");
const todoArray = JSON.parse(todoList);

form.addEventListener("submit", () => {
  const addtodo = document.querySelector("#addTodo");
  const newTodo = addtodo.value.trim();

  if (newTodo) {
    if(todoList) {
      todoArray.push(newTodo);
      const todoString = JSON.stringify(todoArray)
      localStorage.setItem("todoList", todoString)
    } else {
      localStorage.setItem("todoList", `["${newTodo}"]`)
    }
  };
});



if(todoList) {
  todoArray.forEach((todo, i) => {
    let li = document.createElement("li")
    li.innerText = todo;

    let button = document.createElement("button");
    button.innerText = "delete"

    button.addEventListener("click", () => {
      location.reload();

      todoArray.splice(i, 1);
      const todoString = JSON.stringify(todoArray)
      localStorage.setItem("todoList", todoString)
      console.log(todoArray);
    });

    li.appendChild(button);
    ol.appendChild(li);
  })
};



// localStorage.clear();