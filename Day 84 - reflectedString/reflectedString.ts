function reflectedStringts(word: string): string {
    const inputS: string[] = word.split('');
    const reflected: object = {
        a: 'z', b: 'y', c: 'x',
        d: 'w', e: 'v', f: 'u',
        g: 't', h: 's', i: 'r',
        j: 'q', k: 'p', l: 'o',
        m: 'n', n: 'm', o: 'l',
        p: 'k', q: 'j', r: 'i',
        s: 'h', t: 'g', u: 'f',
        v: 'e', w: 'd', x: 'c',
        y: 'b', z: 'a'
    }
    let retWord: string = '';
    inputS.forEach(element => {
        retWord += reflected[element]
    });

    return retWord;
}

console.log(reflectedStringts('name'));