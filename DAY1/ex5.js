let num = "Ahmed";
let vowels = "aeuio";
let numLower = num.toLowerCase
for (i =0; i < numLower.length; i++){
    for (j = 0; j < vowels.length; j++){
        if(numLower[i] == vowels[j]){
        console.log("we found a vowel");
    }
    }
}