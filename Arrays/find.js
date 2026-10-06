let numbers = [10, 20, 30, 40]
let result = numbers.find(number => number > 20);
console.log(result) 
//findindex()
let index = numbers.findIndex(number => number > 20);
console.log(index);
//find() with objects 

let users = [
    {id : 1, nmae: "Kundan"},
    {id : 2, nmae: "Rahul"},
    {id : 3, nmae: "Akash"},
];

let user = users.find(user => user.id === 2);
console.log(user);

//findinex()
