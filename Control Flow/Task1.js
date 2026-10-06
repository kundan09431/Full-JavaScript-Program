let correctPassword = "1234";
let attemts = ["1111","2222","1234"];

for(let i=0;i<attemts.length;i++){
    let password = attemts[i];
    if(password === correctPassword){
        console.log("Login succesfully");
        break;
    }else{
        console.log("Wrong Password");
    }
}