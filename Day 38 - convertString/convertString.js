function convertString(s, t) {
    let word = '';
    let indext = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] === t[indext]) {
            word = word.concat(s[i]);
            indext++;

            if (word === t) {
                return true;
            }
        }
    };
    return false;
};

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));