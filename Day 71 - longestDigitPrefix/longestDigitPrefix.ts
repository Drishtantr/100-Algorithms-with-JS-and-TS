function longestDigitPrefixts(a: string): string {
    let prefix: string = '';

    for(let char of a) {
        const chec: number = parseInt(char);
        if(isNaN(chec)) {
            break;
        }
        prefix += char;
    }

    return prefix;

}

console.log(longestDigitPrefixts('123aa1'));
