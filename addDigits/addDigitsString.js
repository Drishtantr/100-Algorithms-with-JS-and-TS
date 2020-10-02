function addDigitsjs(num) {
    const n = num.toString().split('');
    return parseInt(n[0])+parseInt(n[1]);
}

console.log(addDigitsjs(27))