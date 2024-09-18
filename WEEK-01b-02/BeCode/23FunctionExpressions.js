// const callTwice = function (func) {
//     func();
//     func();
// };

// // Here, the callTwice function takes another function as a parameter and call it two times

// const rollDie = function () {
//     const roll = Math.floor(Math.random() * 6 + 1);
//     console.log(roll);
// };

// callTwice(rollDie);


const rollDie = function () {
const roll = Math.floor(Math.random() * 6 + 1);
console.log(roll);
};


const multiCall = function (func, times) {
    for (let i = 1; i <= times; i++) {
        func();
    }
}
multiCall(rollDie, 4)
