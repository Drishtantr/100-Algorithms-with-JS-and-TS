function strictlyIncreasingArraydiffts(a: number[]): number {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= a[i + 1]) {
            var diff = (a[i] + 1) - a[i + 1];
            a[i + 1] += diff;
            count+= diff;
        }
    }
    return diff;
}

console.log(strictlyIncreasingArraydiffts([1, 18, 8]));