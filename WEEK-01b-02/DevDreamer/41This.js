console.log(this);

let user = {
    name: "Anthony",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
    delayedGreet: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`);
        }, 2000);
    }
};

user.greet();  // Affiche "Hello, Anthony!"

user.delayedGreet();  // Affiche "Hello, Anthony!" après 1 seconde




function greet () {
    console.log(`This is an ${this.document}!`);
}
greet();