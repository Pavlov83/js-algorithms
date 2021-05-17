function binarySearch(arr,target){

        let left = 0;
        let right = arr.length -1;
        let mid = left + Math.trunc(right - left ) /2;

        while(left <= right){

            if(target == arr[mid]) return mid;
            if(target < right){
                left = mid + 1;
            }else{
                right = mid - 1;
            }

        }

        return -1;

}

console.log("Binary search:", binarySearch([1,3,5,7,8],5));
console.log("Binary search :", binarySearch([1, 2, 3, 4, 5, 6, 7],0));
console.log("Binary search :", binarySearch([2, 8, 89, 120, 1000],120));
