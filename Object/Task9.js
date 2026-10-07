//object.keys()
const user = {
    name : "Kundan",
    age : 22,
    city : "Jaipur"
};
console.log(user)
console.log(Object.keys(user))
const keys = Object.keys(user);

keys.forEach(key=>{
    console.log(key);
})


