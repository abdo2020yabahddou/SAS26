function filterOddNumbers(arr, callback){
    return callback(arr);
}

const isOdd = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
          result.push(true);
        }
    }
    return result;
}

let value = filterOddNumbers([12,8,9,7,4,3], isOdd);
console.log(value);
