let findBrokenKeys = (string1, string2) => {
    let answer = [];
    for (let i = 0; i < string1.length; i++) {
        // console.log(string1[i], string2[i]);
        if (string1[i] !== string2[i] && !answer.includes(string1[i])) {
            answer.push(string1[i])
        }
    }
    console.log(answer);
}

findBrokenKeys("happy birthday", "hawwy birthday") // ["p"]
findBrokenKeys("starry night", "starrq light") // ["y", "n"]
findBrokenKeys("beethoven", "affthoif5") // ["b", "e", "v", "n"]
