function factorial(n){
    let facto = 1;
    for (let i = 1; i <= n; i++){
         facto = facto * i;
    } 
    return facto
}

let value = factorial(12);
console.log(value);
