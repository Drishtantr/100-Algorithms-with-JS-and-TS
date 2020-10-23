function characterParityts(a: string) {
    var c: number = parseInt(a);
    if (isNaN(c)) return 'Not a number';
    else if (c%2 === 0) return 'Even';
    else return 'odd';
};

console.log(characterParityts('5'));
console.log(characterParityts('6'));
console.log(characterParityts('a'));