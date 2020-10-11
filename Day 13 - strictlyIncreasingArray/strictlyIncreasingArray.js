function strictlyIncreasingArray(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= a[i + 1]) {
            var diff = (a[i] + 1) - a[i + 1];
            a[i + 1] += diff;
        }
    }
    return a;
}

console.log(strictlyIncreasingArray([1, 10, 8]));