//max diff of 2 consecutive elements
function maxArrayDiff(a) {
    var min= Math.abs(a[0] - a[1]);
    for (var i=0; i<a.length-1; i++) {
        min = Math.abs(a[i]-a[i+1]) > min ? Math.abs(a[i]-a[i+1]): min;
    }
    return min;
};

console.log(maxArrayDiff([2,3,5,1,6]));