function matrix(arr) {
let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }
    return result;
}

let value = matrix([[5, 4, 3],[4, 5, 6]]);
console.log(value);
