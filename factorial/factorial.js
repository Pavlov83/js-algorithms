
// function factorializeWithWhile(num){

//     let result = num;
//     if(num === 0 || num < 0) return 1;

//     while(num > 1){
//         num--;
//         result *= num

//     }
  
//    return result;

// }

// console.log(factorializeWithWhile(10));

function factorializeR(num){

    if(num < 0){
        return -1;
    }else if(num == 1){
        return 1;
    }else{
        return(num *= factorializeR(num-1))
    }


}

console.log(factorializeR(10))