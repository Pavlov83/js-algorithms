const arr = [1, 3 ,5 ,6 ,7];


    let sum = (array) =>{

        let total = 0;

        array.forEach(index => total += index);
        return console.log(total)
    }

    
    sum(arr);