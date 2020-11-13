function evenDigitsOnly(a) {
    const s = a.toString().split('');

    for(let i = 0; i < s.length; i++) {
        if (parseInt(s[i]) %2 !== 0) {
            return false;
        }
    }

    return true;
};

console.log(evenDigitsOnly(248624));
console.log(evenDigitsOnly(21484));
console.log(evenDigitsOnly(248443));