function capitalize(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase();
        for (let j = 1; j < words[i].length; j++) {
            result += words[i][j];
        }
        if (i < words.length - 1) {
            result += " ";
        }
    }
    return result;
}

let value = capitalize("Maradona is better than Messi");
console.log(value);
