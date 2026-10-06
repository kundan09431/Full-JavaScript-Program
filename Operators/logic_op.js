let age = 20
console.log(age>=18 && age <=60)

let username = "admin";
let password = "1234";
if(username === "admin" && password === "1234"){
    console.log("Login Succesfully")
}

age = 17
if(age < 18 || age > 60){
    console.log("Special category")
}

let isLoggedIn = true
console.log(!isLoggedIn)

//ternary operator

age = 20

let result = age >= 18 ? "Adult" :"Minor";
console.log(result);
