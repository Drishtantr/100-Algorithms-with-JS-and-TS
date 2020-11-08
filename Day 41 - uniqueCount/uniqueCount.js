function uniqueCount(a) {
    let comp = [];
    comp.push(a[0]);
    for (let i=0; i<a.length-1; i++) {
        if (!comp.includes(a[i+1])) {
            comp.push(a[i+1]);
        }
    }
    return comp.length;
};

console.log(uniqueCount('cabca'));