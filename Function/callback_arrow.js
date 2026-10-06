function greet(name, callback){
    console.log("Hello " + name);

    callback();
}

greet("Kundan",function(){
    console.log("Welcome!");
});

greet("Kundan", ()=>{
    console.log("Welcome!");
})