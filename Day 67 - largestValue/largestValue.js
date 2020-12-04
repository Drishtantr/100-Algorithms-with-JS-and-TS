function largestValue(a) {
    const maxVal = [];
    for (let i=0; i<a.length; i++) {
        maxVal.push(Math.max.apply(Math, a[i]));
    }
    return maxVal;

}

console.log(largestValue([[1,2,3,4], [10,11,12,13], [20, 221, 22, 23]]));
