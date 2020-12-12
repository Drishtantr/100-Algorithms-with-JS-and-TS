function missingLetters(word) {
    const alp = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i=0; i<word.length; i++) {
        if(word[i] !== alp[i]) {
            return alp[i];

        }
    }
    return undefined;

}

console.log(missingLetters('abcdfgh'));
console.log(missingLetters('abcdefghijlmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));