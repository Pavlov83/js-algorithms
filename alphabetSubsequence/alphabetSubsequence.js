


function alphabetSubsequence(s){
    let uniqueLetters = new Set(s);

    if(uniqueLetters.size < s.length){
        return false;
    }

    else{
        for(let i = 0; i < s.length + 1; i++){

            if(s.charCodeAt(i + 1) <= s.charCodeAt(i)){
                return false;
            }

            else{
                return true;
            }
        }
    }
}