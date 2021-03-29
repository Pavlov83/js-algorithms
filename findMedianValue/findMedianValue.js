//find the median(middle) value in sorted array

const arr1 =[ 2,4,7,6,6];
const arr2 =[]

findMedianValue = (arr) =>{

    const isEven = arr.length % 2 === 0;

    let median = 0;

    if(isEven){

        median = arr[Math.floor(arr.length / 2 -1)];
    }else{

        median = arr[Math.floor(arr.length / 2)];
    }
    console.log(median)
}

findMedianValue(arr1);