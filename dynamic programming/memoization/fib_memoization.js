//write a function 'fib(n)' that takes a number as argument
//The function should return the n-th number of the fib sequence
//1st and 2nd number of the sequence is 1

const fib = (n) =>{

    if(n <= 2)return 1;
    return fib(n-1) + fib(n-2)

}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
