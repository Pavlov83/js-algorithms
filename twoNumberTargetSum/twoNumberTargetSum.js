//find if adding two numbers 
//in the array can match the target

//Solution with two for loops:
const myArray = [3,5,-4,8,11,1,-1,6];

let targetSum = 10;

for(i = 0; i < myArray.length -1; i++){
    let firstNum = myArray[i];

    for(j = i + 1; j < myArray.length;j++){
        secondNum = myArray[j]
        if (firstNum + secondNum == targetSum){
            return(firstNum,secondNum)
        }
    }

    return[]

}

//Solution with Hash Table

function twoNumberSum(array,targetSum){
    array.sort((a,b) => a - b);
    let left = 0;
    let right = array.length -1;
    while(left < right){
        const currentSum = array[left] + array[right];
            if(currentSum === targetSum){
                return[array[left], array[right]]
            }else if(currentSum < targetSum){
                left ++;
            }else if(currentSum > targetsum){
                right--;
            }
    }
        return [];
}


