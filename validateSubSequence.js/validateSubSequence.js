const arr = [1,6,3,12,35,67,89,90]
const arrComp = [1,12,89]

function validateSubSequence(arr,arrComp){
    
    let j =0;

    for(i = 0;i < arr.length; i ++){
        if(arr[i] === arrComp[j]){
            j++;
        }
    }
    if(j === arrComp.length){
        return true;
    }else{
        return false
    }


}

console.log(validateSubSequence(arr,arrComp));
