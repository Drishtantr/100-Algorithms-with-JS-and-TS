function splitNumber(a) {
    const astr = a.toString();
    const half = astr.length/2
    let first = getTotal(0, half, astr);
    let second = getTotal(half, astr.length, astr);
    return first === second;
};

function getTotal(start, end, num) {
    return num.substring(start, end).split('').map((element) => parseInt(element)).reduce((a,b) => a+b);
}

console.log(splitNumber(1230));
console.log(splitNumber(1238));