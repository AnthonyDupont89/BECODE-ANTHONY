let num_of_digits = (num) => {
    let string = num.toString();
    let count = 0;
    for (char of string) {
        count++;
    }
    console.log(count);
}

num_of_digits(1000) // 4
num_of_digits(12) // 2
num_of_digits(1305981031) // 10
num_of_digits(0) // 1