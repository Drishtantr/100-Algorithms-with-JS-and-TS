function longestDigitPrefix(a) {
    let prefix = '';

    for(let char of a) {
        const chec = parseInt(char);
        if(isNaN(chec)) {
            break;
        }
        prefix += char;
    }

    return prefix;

}

console.log(longestDigitPrefix('123aa1'));
