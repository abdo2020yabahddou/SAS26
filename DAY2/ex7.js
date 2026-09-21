function applyOperation(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function minus(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
console.log(applyOperation(3, 3, divide));