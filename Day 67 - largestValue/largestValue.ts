function largestValuets(a: number[][]): number[] {
    const maxVal: number[] = [];
    for (let i=0; i<a.length; i++) {
        maxVal.push(Math.max.apply(Math, a[i]));
    }
    return maxVal;

}

console.log(largestValuets([[1,2,3,4], [10,11,12,13], [20, 221, 22, 23]]));
