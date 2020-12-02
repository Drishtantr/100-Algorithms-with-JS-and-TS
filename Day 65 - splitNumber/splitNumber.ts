function splitNumberts(a: number): boolean {
    const astr: string = a.toString();
    const half: number = astr.length/2
    let first = getTotalts(0, half, astr);
    let second = getTotalts(half, astr.length, astr);
    return first === second;
};

function getTotalts(start: number, end: number, num: string): number {
    return num.substring(start, end).split('').map((element) => parseInt(element)).reduce((a,b) => a+b);
}

console.log(splitNumberts(1230));
console.log(splitNumberts(1238));