function sumOfOddFibonacci(n) {
    const fib = [];
    let a = 1;
    let b = 1;
    let sum = 0;
    fib.push(a);
    while (b < n) {
        fib.push(b) 
        let temp = a; 
        a = b;
        b = temp + a;
    }
    fib.forEach(element => {
        sum += element%2 !== 0 ? element : 0;
    });
    return sum;

}

console.log(sumOfOddFibonacci(10));
console.log(sumOfOddFibonacci(1000));