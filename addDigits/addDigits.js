function addDigitsjs(num) {
    var fir = Math.floor(num/10);
    var sec = num - fir*10;
    return fir+sec;
}

console.log(addDigitsjs(99))