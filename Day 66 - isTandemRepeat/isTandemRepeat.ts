function isTandemRepeatts(a: string): boolean {
    if (a.length % 2 !== 0) {
        return false;
    }
    return a.slice(0, a.length/2) === a.slice(a.length/2, a.length);
}

console.log(isTandemRepeatts('tandemtandem'));
console.log(isTandemRepeatts('qqq'));
console.log(isTandemRepeatts('2ww2w'));