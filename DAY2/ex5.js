const isEmpty = str => {
    let str1 = str.trim()
    if( str1.length === 0 ){    //first condition (if empty): str.length === 0
        return true
    } else{
        return false
    }
}

let value = isEmpty("  ");
console.log(value);
