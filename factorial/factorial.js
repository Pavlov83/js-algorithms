//factorialize number with recursion

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

    return result
}

console.log(factorializeWhile(40))