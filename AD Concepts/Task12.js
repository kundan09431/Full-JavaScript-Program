//Constructors FUnction with Methods 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}


const person1 = new Person("Kundan",22);
const person2 = new Person("Rahul",21);

person1.greet()
person2.greet()
