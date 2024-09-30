let minMax = function (array) {
    let min = array[0];    
    for (let num of array) {
        min < num ? min = min : min = num;
    }
    let max = array[0];    
    for (let num of array) {
        max > num ? max = max : max = num;
    }
    let minMax = [min, max]
    console.log(minMax);
}

minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1]);