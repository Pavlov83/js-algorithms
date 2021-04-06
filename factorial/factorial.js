
<<<<<<< HEAD
// function factorializeWithWhile(num){

//     let result = num;
//     if(num === 0 || num < 0) return 1;

//     while(num > 1){
//         num--;
//         result *= num

//     }
  
//    return result;
=======
// function factorializeRec(num){
//     if(num < 0) return -1;

//     else if(num === 0){
//         return 1
//     }else{
//         return(num * factorializeRec(num - 1))
//     }

// }

//factorialize with while

function factorializeWhile(num){
    let result = num;

    if(num < 0 || num == 1)return 1;

    while(num > 1){
        num--;
        result *= num;
    }

<<<<<<< HEAD
    return result
}

console.log(factorializeWhile(40))
=======
}
>>>>>>> ab4165098f59d4165020f51ea9efe7d178a891ef

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
<<<<<<< HEAD

console.log(factorializeR(10))
=======
console.log(factorializeWhile(21))
>>>>>>> 2c1c50befae15f7cda6d9f1e0488e018c3271cb9
>>>>>>> ab4165098f59d4165020f51ea9efe7d178a891ef
