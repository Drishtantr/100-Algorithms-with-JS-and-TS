function addDigits(num: number): number {
    const fir = Math.floor(num/10);
    const sec = num - fir*10;
    return fir+sec;
}

console.log(addDigits(27));