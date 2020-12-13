function newNumericalSysts(str: string): string[] {
    const sum: string[] = [];
    let startCount = 65;
    let endCount = str.charCodeAt(0);

    while (startCount <= endCount) {
        const addd: string = `${String.fromCharCode(startCount)} + ${String.fromCharCode(endCount)}`
        sum.push(addd);
        startCount++;
        endCount--;
        console.log(addd);
    }
    // console.log(addd); doesn't recognize addd
    return sum;


}

console.log(newNumericalSysts('G'));
console.log(newNumericalSysts('D'));