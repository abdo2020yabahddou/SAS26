function countChar(str, char){
    let count = 0 
    for (let i = 0; i < str.length; i++){
        if(str[i] === char){
            count++
        }
    }
    return count
}

let value1 = countChar("Haallllllllllllllllland", 'l');
console.log(value1);
