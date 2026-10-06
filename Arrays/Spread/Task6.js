//map()+ Objects

let products = [
    {name: "Laptop", price : 50000},
    {name: "Phone", price : 20000},
    {name: "Tablet", price : 15000},
];

let productName = products.map(product => product.name);

console.log(productName)