function uniqueElements(elem, index, arr) {
    for (let i = 0; i < index; i++) {
        if (arr[i] === elem) {
            return false
        }
    }
    return true;
}
let myArray = [1,5,'a',1,2,1,'a'];
console.log(myArray.filter(uniqueElements));