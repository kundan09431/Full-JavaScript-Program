const person1={
    name : "Kundan"
};

const person2 = {
    name : "Rahul"
}

function greet(){
    console.log(`Hello ${this.name}`)
}

greet.call(person1)
greet.call(person2)