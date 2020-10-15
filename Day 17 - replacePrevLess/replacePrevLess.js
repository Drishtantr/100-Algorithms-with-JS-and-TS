function replacePrevLess(a) {
    var b = [];
    b.push(-1);
    for(let i = 1; i<a.length; i++) {
        if (a[i]>a[i-1]) {
            b.push(a[i-1]);
        } else {
            b.push(-1)
        };
    };
    return b;
};

console.log(replacePrevLess([3,5,2,4,5]));