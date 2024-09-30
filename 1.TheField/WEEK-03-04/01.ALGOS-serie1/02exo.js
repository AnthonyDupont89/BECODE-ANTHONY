let addUp = function(num) {
    if (isNaN(parseInt(num)) && num >= 0 || num <= 1000) {
        let sum = 0;
        for (let i = num ; i > 0; i--) {
            sum += i; 
        }
        console.log(sum);
    } else {
    console.log("Please enter a number, between 0 & 1000.");
    }
}

addUp(4);
addUp(13);
addUp(600);