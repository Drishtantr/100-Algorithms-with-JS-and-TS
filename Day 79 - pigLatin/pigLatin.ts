function pigLatints(str: string): string {
    const lettere = str.split('');
    const vowel = /[aeiou]/;

    if (vowel.test(str[0])) {
        return `${str}way`;
    }

    while (true) {
        if (!vowel.test(lettere[0])) {
            const firstCo = lettere.splice(0,1)[0]
            lettere.push(firstCo);
        } else {
            break;
        }
    }

    str = lettere.join('') + 'ay';
    return str;

}

console.log(pigLatints('glove'));
console.log(pigLatints('eight'));