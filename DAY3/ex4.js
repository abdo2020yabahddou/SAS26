function palindromeFunc(str){
    let str1 = str.toLowerCase();
    let num = true;
    for(i = 0; i < str1.length/2; i++ ){
        if(str1[i] === str1[str1.length-1-i]){
             num = true
        }else{
            num = false
            break;
        }   
    }
    return num
}

let value = palindromeFunc("Nayan");
console.log(value);
