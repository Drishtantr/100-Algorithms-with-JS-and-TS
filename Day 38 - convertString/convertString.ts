function convertStringts(s: string, t: string): boolean {
    let word: string = '';
    let indext: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[indext]) {
            word = word.concat(s[i]);
            indext++;

            if (word === t) {
                return true;
            }
        }
    };
    return false;
};

console.log(convertStringts('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertStringts('addbyca', 'abcd'));