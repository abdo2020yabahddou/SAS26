function maxNumber(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}

let value = maxNumber([1,3,17,9,10]);
console.log(value);