function squareDigitsSequencets(a0: number): number {
    const already: number[] = [a0]

    while(true) {
        let an: number = already[already.length-1].toString().split('').map(num => parseInt(num) **2).reduce((num1, num2) => num1 + num2)
        if (already.includes(an)) {
            break;
        } else {
            already.push(an);
        }
    }
    return already.length + 1;

}

console.log(squareDigitsSequencets(16));
console.log(squareDigitsSequencets(103));
console.log(squareDigitsSequencets(24));