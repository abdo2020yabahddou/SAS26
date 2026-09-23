function compressStr(str) {
    let result = "";
    let count = 1;
    let str1 = str.toLowerCase();
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] === str1[i + 1]) {
            count++;
        } else{
            result += str1[i] + count;
            count = 1;
        }
    }
    return result;
}

let value = compressStr("Aaabbcccc")
console.log(value);
