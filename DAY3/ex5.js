function reverse(str) {
    let temp = "";
    for (let i = str.length ; i > 0; i--) {
        temp += str[i];
    }
    return temp;
}

let value = reverse("rayan");
console.log(value);