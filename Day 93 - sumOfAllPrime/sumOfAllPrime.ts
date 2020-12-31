function sumOfAllPrimets(num: number): number {
    let sum: number = 0;
    for (let i: number=2; i<=num; i++) {
        let isPrime: boolean = checkPrimets(i);
        if (isPrime) {
            sum+=i
        }
    }
    return sum;
}

function checkPrimets(number: number): boolean {
    for (let i: number = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(sumOfAllPrimets(10));
console.log(sumOfAllPrimets(977));