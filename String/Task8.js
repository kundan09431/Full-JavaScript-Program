let username = "  KUNDAN  ";
username = username.trim().toLowerCase();
console.log(username);

//trim :- Remove extra spaces


let email = "kundan09431@gmail.com"
if(email.includes("@") && email.endsWith(".com")){
    console.log("Valid format")
}else{
    console.log("Invalid format")
}