function outer(){
    let msg = "Hello!"
    function inner(){
        console.log(msg)
    }
    return inner;
}

const fn = outer();

fn();