//Add/remove from end: push() and pop()
let numbers = []
numbers.push(10)
numbers.push(20)
numbers.push(30)
console.log(numbers)
numbers.pop()
console.log(numbers)

//Add/remove from beginning
let result = numbers.shift()
console.log(result)
numbers.unshift(30)
console.log(numbers)