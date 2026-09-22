function matrix(arr) {
let result = 0;
    for (let i = 0; i < arr.length; i++) {
            result += arr[i][i];
    }
    return result;
}

let value = matrix([[5, 4, 3],[4, 5, 6],[7,8,9]]);
console.log(value);