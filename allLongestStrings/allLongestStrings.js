function allLongestStrings(array){

    let longestLength = 0;
    const longestWords = [];

    array.forEach((text) =>{
        longestLength = longestLength < text.length ? word.length : longestLength;
    })

    array.forEach((text) =>{
        if(word.length === longestLength){
            longestWords.push(word);
        }
    });

    return longestWords;

}