const { use } = require("react")

//map() with Objects
let user = [
    {name : "Kundan", age : 22},
    {name : "Rahul", age : 21},
    {name : "Amit", age : 20},
]

let names = user.map(user => user.name);
console.log(names);