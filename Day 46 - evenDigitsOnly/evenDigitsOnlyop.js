function evenDigitsOnly(a) {
    const digits = a.toString().split('');
    return digits.every((digit) => parseInt(digit) % 2 === 0);
};

console.log(evenDigitsOnly(248624));
console.log(evenDigitsOnly(21484));
console.log(evenDigitsOnly(248443));