function alphabeticShifttso(a: string): string {
    const alphabet: object = {"a":"b","b":"c","c":"d","d":"e","e":"f","f":"g","g":"h","h":"i","i":"j","j":"k","k":"l","l":"m","m":"n","n":"o","o":"p","p":"q","q":"r","r":"s","s":"t","t":"u","u":"v","v":"w","w":"x","x":"y","y":"z","z":"a"};
    var b = a.split('');
    console.log(b);
    for(var i=0; i<b.length; i++) {
        b[i] = alphabet[b[i]];
    }
    console.log(b);
    return b.join('');
}

console.log(alphabeticShifttso('crazy'));