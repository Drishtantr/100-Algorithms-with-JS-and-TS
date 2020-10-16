function elementReplace(a, ele, sub) {
    a.forEach((element, index) => {
        if(element === ele) {
            a[index] = sub;
        }
    });
    return a;
};

console.log(elementReplace([1,2,1],1,3));