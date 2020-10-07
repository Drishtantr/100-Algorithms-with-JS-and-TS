function alphabetSubSequence(s) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var c=0;
    for (var i = 0; i < s.length -1; i++) {
        if(alphabet.indexOf(s[i+1]) > alphabet.indexOf(s[i])) {
            c++;
        }
    }
    return c===s.length-1;
}

console.log(alphabetSubSequence('zab'))
console.log(alphabetSubSequence('effg'))
console.log(alphabetSubSequence('cdce'))
console.log(alphabetSubSequence('ace'))
console.log(alphabetSubSequence('bxz'))