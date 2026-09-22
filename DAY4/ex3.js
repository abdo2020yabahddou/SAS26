function includeValue(arr, value){
    for (let i = 0; i <= arr.length; i++){
        if(arr[i] === value){
            return true
        }else{
            return false
        }
    }
}

let value1 = includeValue([1,2,3,4], 5);
console.log(value1);
