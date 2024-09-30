let sortIt = (array) => {
    array.sort((a, b) => {
        return a-b;
    });
    console.log(array);
};

sortIt([4, 1, 3]) // [1, 3, 4]
sortIt([[4], [1], [3]]) // [[1], [3], [4]]
sortIt([4, [1], 3]) // [[1], 3, 4]
sortIt([[4], 1, [3]]) // [1, [3], [4]]
sortIt([[3], 4, [2], [5], 1, 6]) // [1, [2], [3], 4, [5], 6]