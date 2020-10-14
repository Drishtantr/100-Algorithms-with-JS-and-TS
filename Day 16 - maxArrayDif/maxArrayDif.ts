//max diff of 2 consecutive elements
function maxArrayDiffts(a: number[]): number {
    var min= Math.abs(a[0] - a[1]);
    for (var i=0; i<a.length-1; i++) {
        min = Math.abs(a[i]-a[i+1]) > min ? Math.abs(a[i]-a[i+1]): min;
    }
    return min;
};

console.log(maxArrayDiffts([2,3,5,1,16]));