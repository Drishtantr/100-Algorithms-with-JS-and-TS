function alphabeticShift(a) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var newWord = [];
    for(var i=0; i<a.length; i++) {
        if (a[i] != 'z') {
            newWord[i] = alphabet[alphabet.indexOf(a[i])+1];
            console.log(alphabet.indexOf(a[i]));
        } else {
            newWord[i] = 'a'
        }
    }
    return newWord.join('');
}

console.log(alphabeticShift('crazy'));