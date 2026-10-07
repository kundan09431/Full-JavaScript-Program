let sentence = "JavaScript is very powerful";
let words = sentence.split(" ");
console.log(words);
let upperwords = words.map(word=>word.toUpperCase());
console.log(upperwords)

let result = upperwords.join(" ");
console.log(result)