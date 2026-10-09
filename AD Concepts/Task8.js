const person = {
    name : "Kundan"
}

function greet(age,city){
    console.log(`My name is ${this.name}, I am ${age}, from ${city}`);
}

greet.apply(person,[22,"jaipur"]);
