//If we have an array of boolean values first  section consists of
//false and the second is true.Find the boundary


function find_boundary(arr){
    let left =0;
    let right = arr.length -1;
    let boundary_index = -1;

    while(left <= right){
        let mid = Math.trunc((left + right) /2);
        if(arr[mid]){
            boundary_index = mid;
            right = mid -1;
        } else{
            left = mid + 1;
        }
    }
    return boundary_index;
}

console.log('find boundary',find_boundary([false,false,true,true,true]))