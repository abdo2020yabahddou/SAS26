function swap(arr) {
    let result = [];
    for (let i = 0; i <= arr[0].length-1; i++) {
        let row = [];
        for (let j = 0; j < arr.length; j++) {
            row.push(arr[j][i]);
        }
        result.push(row);
    }
    return result;
}

let value = swap([[8, 7, 3],[4, 5, 6]]);
console.log(value);