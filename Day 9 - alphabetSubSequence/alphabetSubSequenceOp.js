function alphabetSubSequence(s) {
    const chars = s.split('');
    const charsValues = [];

    chars.forEach(char => {
        charsValues.push(char.charCodeAt(0));
    });

    if (new Set(charsValues).size !== charsValues.length) {
        return false;
    }

    for(let i=0; i< charsValues.length-1; i++) {
        if(charsValues[i] >= charsValues[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(alphabetSubSequence('zab'));
console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));
console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));