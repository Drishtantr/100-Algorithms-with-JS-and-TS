function extractEachKth(a, k) {
    const b = [];
    for (let i = 0; i<a.length; i++) {
        if ((i+1) % k !== 0) {
            b.push(a[i]);
        }
    }
    return b;

};

console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10], 3));