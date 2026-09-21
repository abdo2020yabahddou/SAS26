function applyOperation(a, b, operation) {
    return operation(a, b);
}
const add = (x,y) => {
    return x + y;
}

const minus = (x,y) => {
    return x - y;
}

console.log(applyOperation(7, 3, add));