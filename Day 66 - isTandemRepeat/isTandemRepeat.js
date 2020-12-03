function isTandemRepeat(a) {
    if (a.length % 2 !== 0) {
        return false;
    }
    return a.slice(0, a.length/2) === a.slice(a.length/2, a.length);
}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2ww2w'));