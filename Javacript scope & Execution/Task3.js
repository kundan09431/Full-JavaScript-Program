//Scope Chain
let a = 1;//Global
function outer(){
    let b = 2;//Local & Global
    function inner(){
        let c = 3;
        console.log(a);
        console.log(b)
        console.log(c)
    }

    inner();
} 

outer();
