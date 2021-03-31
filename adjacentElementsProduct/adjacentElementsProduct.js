function adjacentElementsProduct(array){

    let largestProduct = array[0] * array[1];

    for(let i = 1;i < array.length -1; i++){
        const product = array[i] * array[i + 1];
        
        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([1,2,3,4]))