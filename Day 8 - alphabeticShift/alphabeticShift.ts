function alphabeticShiftts(a: string): string {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var newWord = [];
    for(var i=0; i<a.length; i++) {
        if (a[i] != 'z') {
            console.log(alphabet.indexOf(a[i]));
            newWord[i] = alphabet[alphabet.indexOf(a[i])+1];
        } else {
            newWord[i] = 'a';
        }
    }
    return newWord.join('');
}

console.log(alphabeticShiftts('crazy'));