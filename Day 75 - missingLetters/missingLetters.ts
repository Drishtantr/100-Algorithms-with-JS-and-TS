function missingLettersts(word: string): any {
    const alp: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i=0; i<word.length; i++) {
        if(word[i] !== alp[i]) {
            return alp[i];

        }
    }
    return undefined;

}

console.log(missingLettersts('abcdfgh'));
console.log(missingLettersts('abcdefghijlmno'));
console.log(missingLettersts('abcdefghijklmnopqrstuvwxyz'));