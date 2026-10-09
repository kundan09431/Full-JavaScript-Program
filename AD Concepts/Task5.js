const user = {
    name : "Kundan",
    age : 22,

    introduce(){
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
}

user.introduce()