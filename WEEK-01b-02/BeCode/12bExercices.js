const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard.splice(1, 1, 'Luna', );
leaderboard.splice(3, 1, 'Draco');

console.log(leaderboard);



const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
];

let finalArray = [initialArray[7][0], initialArray[2][1], initialArray[4][0]]
console.log(finalArray);




const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

// VERSION 1
// planets.splice(0, 1, 'Mercury');
// planets.splice(5, 0, 'Saturn');


// VERSION 2
planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');

console.log(planets);

