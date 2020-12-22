function reflectedString(word) {
    const inputS = word.split('');
    const reflected = {
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
    let retWord = '';
    inputS.forEach(element => {
        retWord += reflected[element]
    });

    return retWord;
}

console.log(reflectedString('name'));