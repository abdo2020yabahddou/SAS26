function isEmpty(str){
    if(str.length === 0 || str.isEmpty){
        return true
    } else{
        return false
    }
}

let value = isEmpty("    ");
console.log(value);
