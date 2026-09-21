function createMultiplier(multiplier){
     const num = a => {
       return a * multiplier
    }
    return num
}

let value = createMultiplier(9);
console.log(value(5));
