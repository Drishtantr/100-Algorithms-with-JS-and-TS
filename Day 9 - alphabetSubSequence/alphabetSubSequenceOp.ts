function alphabetSubSequenceop(s: string): boolean {
    const chars: string[] = s.split('');
    const charsValues: number[] = [];

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

console.log(alphabetSubSequenceop('zab'));
console.log(alphabetSubSequenceop('effg'));
console.log(alphabetSubSequenceop('cdce'));
console.log(alphabetSubSequenceop('ace'));
console.log(alphabetSubSequenceop('bxz'));