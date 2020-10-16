function elementReplacefts(a: number[], ele: number, sub: number) {
    a.forEach((element, index) => {
        if(element === ele) {
            a[index] = sub;
        }
    });
    return a;
};

console.log(elementReplacefts([1,2,1],1,3));