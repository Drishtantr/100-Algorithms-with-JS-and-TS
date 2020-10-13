//max sum of k consecutive elements
function maxArraySumkts(a: number[], k: number): number {
    var max: number= 0;
    for (var i=0; i<a.length-1; i++) {
        var sum: number = 0;
        for(var j=i; j<k+i; j++) {
            var sum= sum + a[j];
        }
        max = sum > max ? sum: max;
    }
    return max;
};

console.log(maxArraySumkts([2,3,5,1,6], 3));