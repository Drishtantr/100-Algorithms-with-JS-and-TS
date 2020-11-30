function integerToStringOfFixedWidth(a, l) {
    a = a.toString();
    if (a.length >= l) {
        b = a.slice(a.length - l, a.length)
    } else {
        var addZero = l - a.length;
        b = a;
        while (addZero != 0) {
            b = '0' + b;
            addZero --;
        }
    }
    return b;
}

console.log(integerToStringOfFixedWidth(1234,2));
console.log(integerToStringOfFixedWidth(1234,4));
console.log(integerToStringOfFixedWidth(1234,5));
console.log(integerToStringOfFixedWidth(1234,10));