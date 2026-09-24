let products = [
    { name: "Banana", price: 11, inStock: true },
    { name: "Fridge", price: 2700, inStock: false },
    { name: "Airplane", price: 150000, inStock: false }
];

function stocked(products){
    let productsInStock = [];
    for(let product of products){
        if(product.inStock === true){
            productsInStock.push(product.name);
        }
    }
    return productsInStock
}

let value = stocked(products)
console.log("Products in our stock are:", value);

