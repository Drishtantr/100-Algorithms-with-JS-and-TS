function integerToStringOfFixedWidthts(num: number, l: number): string {
    var a: string = num.toString();
    if (a.length >= l) {
        var b = a.slice(a.length - l, a.length)
    } else {
        var addZero = l - a.length;
        var b = a;
        while (addZero != 0) {
            b = '0' + b;
            addZero --;
        }
    }
    return b;
}

console.log(integerToStringOfFixedWidthts(1234,2));
console.log(integerToStringOfFixedWidthts(1234,4));
console.log(integerToStringOfFixedWidthts(1234,5));
console.log(integerToStringOfFixedWidthts(1234,10));