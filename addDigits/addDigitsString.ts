function addDigitsString(num: number): number {
    const n = num.toString().split('');
    return parseInt(n[0])+parseInt(n[1]);
}

console.log(addDigitsString(27));