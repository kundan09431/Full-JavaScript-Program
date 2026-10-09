function countdown(n){//recursion
    if(n===0){
        return;
    }
  
    countdown(n-1);
      console.log(n)
}

countdown(10)