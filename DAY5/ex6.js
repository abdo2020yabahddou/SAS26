let items = [
    { price: 12, quantity: 20 },
    { price: 280, quantity: 5 },
    { price: 1200, quantity: 1 }
];

function totalCost(items){
    let total = 0;
    for (const item of items) {
        total += item.price
    }
    return total
}

let value = totalCost(items)
console.log("the total cost of these items are:", value);
