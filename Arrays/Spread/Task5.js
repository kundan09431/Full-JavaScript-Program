//Spread Operator
let numbers = [10, 20, 30, 40, 50];

let result = numbers.filter(number => number >= 30)
                    .reduce((sum, number) => sum + number, 0);

                    console.log(result);
