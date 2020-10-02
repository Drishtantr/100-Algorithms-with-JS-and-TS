function addDigitsjs(num) {
    const fir = Math.floor(num/10);
    const sec = num - fir*10;
    return fir+sec;
}

console.log(addDigitsjs(99));