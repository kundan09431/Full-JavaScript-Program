//Array Methods as Higher-order functions

let numbers = [1,2,3,4,5,6]

let sum = numbers.reduce((total, number)=>{
    return total + number
}, 0);

console.log(sum)