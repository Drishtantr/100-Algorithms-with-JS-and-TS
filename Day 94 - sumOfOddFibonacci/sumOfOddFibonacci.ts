function sumOfOddFibonaccits(n: number): number {
    const fib: number[] = [];
    let a: number = 1;
    let b: number = 1;
    fib.push(a);
    while (b < n) {
        fib.push(b) 
        let temp: number = a; 
        a = b;
        b = temp + a;
    }
    let sum: number = 0;
    fib.forEach(element => sum += element%2 !== 0 ? element : 0);
    return sum;
}

console.log(sumOfOddFibonaccits(10));
console.log(sumOfOddFibonaccits(1000));