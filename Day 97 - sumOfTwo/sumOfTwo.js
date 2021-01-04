function sumOfTwo(a,b,y) {
    for (let i=0; i<a.length; i++) {
        for (let j=0; j<b.length; j++) {
            if (a[i]+b[j] === y) {
                return true;
            }
        }
    }
    return false;

}

console.log(sumOfTwo([1,2,3],[10,20,30,40], 42));