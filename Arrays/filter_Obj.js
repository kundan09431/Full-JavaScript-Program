let users = [
    {name : "Kundan", age : 22},
    {name : "Rahul", age : 17},
    {name : "Amit", age : 25}
]

let adults = users.filter(user => user.age >= 18);

console.log(adults);