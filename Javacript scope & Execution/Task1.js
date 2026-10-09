let name ="Kundan"
console.log(name)

//Global Scope

function greet(){
    console.log(name)
}

greet();

//Function scope
function greet1(){
    let msg = "Hello!"
    console.log(msg)
}
greet1()

//var and function scope
function test(){
    var x = 10;
    if(true){
        var y = 20
    }

    console.log(x)
    console.log(y)
}

test()