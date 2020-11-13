function evenDigitsOnlyts(a: number): boolean {
    const s: string[] = a.toString().split('');

    for(let i = 0; i < s.length; i++) {
        if (parseInt(s[i]) %2 !== 0) {
            return false;
        }
    }

    return true;
};

console.log(evenDigitsOnlyts(248624));
console.log(evenDigitsOnlyts(21484));
console.log(evenDigitsOnlyts(248443));