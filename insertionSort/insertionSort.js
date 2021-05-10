

    function insertionSort(arr,n){


        let i,key,j;
        for(i = 1;i < n; i++){

            key = arr[i];
            j = i - 1;

            //move the elements that are greater than key,
            // to one position ahead of their current position

            while(j >= 0 && arr[j] > key){

                arr[j + 1] = arr[j];
                j = j - 1;

            }

            arr[j + 1] = key;

        }
    }           

        function printArray(arr,n){
            let i;
            for(i = 0;i < n; i++){
                console.log(arr[i] + " ");
               
            }
        }
    
        let arr = [ 12, 34, 11, 16];
        let n = arr.length;

        insertionSort(arr, n);
        printArray(arr,n);


    

