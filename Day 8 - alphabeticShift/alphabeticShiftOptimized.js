function alphabeticShift(a) {
    const alphabet = {"a":"b","b":"c","c":"d","d":"e","e":"f","f":"g","g":"h","h":"i","i":"j","j":"k","k":"l","l":"m","m":"n","n":"o","o":"p","p":"q","q":"r","r":"s","s":"t","t":"u","u":"v","v":"w","w":"x","x":"y","y":"z","z":"a"};
    var a = a.split('');
    console.log(a);
    for(var i=0; i<a.length; i++) {
        a[i] = alphabet[a[i]];
    }
    console.log(a);
    return a.join('');
}

console.log(alphabeticShift('crazy'));