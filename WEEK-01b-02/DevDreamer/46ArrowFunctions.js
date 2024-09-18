// TASKS

// 1. Rewrite the following function as an arrow function:
// function user0 (name) {
//     return `My name is ${name}`
// }

const user = name => `My name is ${name}`;
console.log(user('Anthony'));




// 2. Rewrite the following function as an arrow function:
// const greeting0 = function() {
//     return console.log('Hello, how are you?');
// }

const greeting = () => console.log('Hello, how are you?');
greeting();




// 3. Fix the following function:
// let book0 = {
//     title: "The Fellowship of the Ring",
//     related: ["The Two Towers, The Return of the King"],
//     showRelated: function () {
//         this.related.forEach(function (relatedBooks) {
//             console.log(`Title: ${this.title}`);
//             console.log(`Related books: ${relatedBooks}`);
//         });
//     },
// };


let book = {
    title: "The Fellowship of the Ring",
    related: ["The Two Towers, The Return of the King"],
    showRelated: function () {
        this.related.forEach((relatedBooks) => {
            console.log(`Title: ${this.title}`);
            console.log(`Related books: ${relatedBooks}`);
        });
    },
};

book.showRelated();


