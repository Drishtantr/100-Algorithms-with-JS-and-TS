function elementReplacets(a: number[], ele: number, sub: number) {
    for(let i=0; i<a.length; i++) {
        if (a[i]===ele) {
            a[i]=sub;
        }
    }
    return a;
};

console.log(elementReplacets([1,2,1],1,3));