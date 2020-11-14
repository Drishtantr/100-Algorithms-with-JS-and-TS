function extractEachKthts(a: number[], k: number) {
    const b: number[] = [];
    for (let i = 0; i<a.length; i++) {
        if ((i+1) % k !== 0) {
            b.push(a[i]);
        }
    }
    return b;

};

console.log(extractEachKthts([1,2,3,4,5,6,7,8,9,10], 3));