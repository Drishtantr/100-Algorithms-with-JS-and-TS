function newNumericalSys(str) {
    const sum = [];
    let startCount = 65;
    let endCount = str.charCodeAt(0);

    while (startCount <= endCount) {
        const addd = `${String.fromCharCode(startCount)} + ${String.fromCharCode(endCount)}`
        sum.push(addd);
        startCount++;
        endCount--;
        console.log(addd);
    }
    // console.log(addd); doesn't recognize addd
    return sum;


}

console.log(newNumericalSys('G'));
console.log(newNumericalSys('D'));