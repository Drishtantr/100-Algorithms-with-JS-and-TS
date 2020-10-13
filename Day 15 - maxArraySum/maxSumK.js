//max sum of k consecutive elements
function maxArraySum(a, k) {
    var max= 0;
    for (var i=0; i<a.length-1; i++) {
        var sum = 0;
        for(var j=i; j<k+i; j++) {
            var sum= sum + a[j];
        }
        max = sum > max ? sum: max;
    }
    return max;
};

console.log(maxArraySum([2,3,5,1,6], 3));