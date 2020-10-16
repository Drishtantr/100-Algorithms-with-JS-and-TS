function elementReplace(a, ele, sub) {
    for(let i=0; i<a.length; i++) {
        if (a[i]===ele) {
            a[i] = sub;
        }
    }
    return a;
};

console.log(elementReplace([1,2,1],1,3));