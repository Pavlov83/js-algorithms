//factorialize number with recursion

function factorializeRec(num){
    if(num < 0) return -1;

    else if(num === 0){
        return 1
    }else{
        return(num * factorializeRec(num - 1))
    }

}