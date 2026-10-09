const person = {
    name : "Kundan"
}
function greet(){
    console.log(`Hello ${this.name}`)
}

const newGreet = greet.bind(person)

newGreet();