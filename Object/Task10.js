//object.values()
const user = {
    name : "Kundan",
    age : 22,
    city : "Jaipur"
};
console.log(user)
console.log(Object.values(user))
const values = Object.values(user);

values.forEach(key=>{
    console.log(key);
})


