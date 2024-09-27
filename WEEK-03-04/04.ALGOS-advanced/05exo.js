let reverse = (array) => {
    array = array.map((_, index) => index).sort((a, b) => b - a).map(index => array[index]);
    console.log(array);
}

reverse(["Leonardo", "Raphael", "Donatello", "Michelangelo"]);