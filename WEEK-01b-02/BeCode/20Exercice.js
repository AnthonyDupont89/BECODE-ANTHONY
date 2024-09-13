
const todos = [];
const list = [];

while (command != "quit") {
    let command = prompt(`Write down a command :
    > "new" to add a todo
    > "list" to see all the todos
    > "delete" to remove a specific todo 
    > "quit" to exit the program`)

    switch (command) {
        case 'new':
            todos.push(prompt("Add a todo"))
            break;

        case 'list':
            for (let i=0; i < todos.length; i++) {
            list.push(`${i+1}. ${todos[i]}`)
            }
            alert(`********* TODO LIST ********* \n${list.join("\n")}`)
            list = [];
            break;

        case 'delete':
            let num = prompt("Enter the number in your todo list");
            todos.splice(num-1, 1)
            break

        case 'quit':
            // just to avoid the alert error
            break

        default:
            alert("This is not a right command")
            break;
    }
}






/* // VARIABLES

let answer;
const todos = [];

// FUNCTIONS

const newTodo = () => {
    const todo = prompt("Insert a todo");
    todos.push(todo);
};

const listTodo = () => {
    console.clear();
    for (let i = 0; i < todos.length; i++) {
    console.log(i + 1 + " : " + todos[i]);
    }
};

const deleteTodo = () => {
    const deletedIndex = parseInt(prompt("which todo you want to delete ?"));

    if (isNaN(parseInt(deletedIndex)) || deletedIndex < 1) {
    console.log("This is not a valid index");
    return;
    }

    console.log(`${todos[deletedIndex - 1]} was deleted`);
    todos.splice(deletedIndex - 1, 1);
};

// PROGRAM


// new
// list
// delete
// quit


while (answer !== "quit") {
    answer = prompt("What do you want to do ?");

    switch (answer) {
        case "new": {
            newTodo();
            break;
        }
        case "list": {
            listTodo();
            break;
        }
        case "delete": {
            deleteTodo();
            break;
        }
        case "quit": {
            console.clear();
            console.log("Thank you ! Bye!");
            break;
        }
    }
} */