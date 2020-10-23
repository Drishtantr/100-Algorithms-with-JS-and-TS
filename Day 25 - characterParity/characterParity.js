function characterParity(a) {
    var c = parseInt(a);
    if (isNaN(c)) return 'Not a number';
    else if (c%2 === 0) return 'Even';
    else return 'odd';
};

console.log(characterParity('5'));
console.log(characterParity('6'));
console.log(characterParity('a'));