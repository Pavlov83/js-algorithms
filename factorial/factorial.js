//factorialize number with recursion

function factorializeRec(num){
    if(num < 0) return -1;

    else if(num === 0){
        return 1
    }else{
        return(num * factorializeRec(num - 1))
    }

}


function factorializeWhile(num){
    var result = num;

    if(num === 0 || num === 1) return 1;

    while(num > 1){
        num--;
        result *= num
    }
    return result;
}
console.log(factorializeWhile(21))