function maxArraySum(a) {
    var max= a[0] + a[1];
    for (var i=0; i<a.length-1; i++) {
        max = (a[i]+a[i+1]) > max ? (a[i]+a[i+1]): max;
    }
    return max;
};

console.log(maxArraySum([2,3,5,1,6]));