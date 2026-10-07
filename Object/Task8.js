const person = {
    name : "Kundan",
    age : 22
}

const address = {
    city : "Jaipur",
    state : "Rajasthan"
}

const user = {
    ...person,
    ...address
}

console.log(user)

