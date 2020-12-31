function sumOfAllPrime(num) {
    let sum = 0;
    for (let i=2; i<=num; i++) {
        let isPrime = checkPrime(i);
        if (isPrime) {
            sum+=i
        }
    }
    return sum;
}

function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(sumOfAllPrime(10));
console.log(sumOfAllPrime(977));