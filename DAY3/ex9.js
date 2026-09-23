function anagramCheck(str1, str2) {
    let str3 = str1.toLowerCase()
    let str4 = str2.toLowerCase()
    if (str3.length !== str4.length) {
        return false
    }
    for (let i = 0; i < str3.length; i++) {
        let count1 = 0;
        let count2 = 0;
        for (let j = 0; j < str3.length; j++) {
            if (str3[i] === str3[j]) {
                count1++
            }
        }
        for (let j = 0; j < str4.length; j++) {
            if (str4[i] === str4[j]) {
                count2++
            }
        }
    }
    return true
}

let value = anagramCheck("listen", "Silent")
console.log(value);
