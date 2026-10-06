function calculate(a, b, operation){
    return operation(a, b)
}

let result = calculate(10, 20, (x, y) => x*y
) 

console.log(result)