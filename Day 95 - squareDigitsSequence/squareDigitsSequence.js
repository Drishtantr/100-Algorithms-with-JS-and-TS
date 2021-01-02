function squareDigitsSequence(a0) {
    const already = [a0]

    while(true) {
        let an = already[already.length-1].toString().split('').map(num => parseInt(num) **2).reduce((num1, num2) => num1 + num2)
        if (already.includes(an)) {
            break;
        } else {
            already.push(an);
        }
    }
    return already.length + 1;

}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
console.log(squareDigitsSequence(24));