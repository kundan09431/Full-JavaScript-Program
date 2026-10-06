function add(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum+=number;
    }
    return sum;
}

console.log(add(10,20))
console.log(add(10,20,50))
console.log(add(10,20,67,65,46))