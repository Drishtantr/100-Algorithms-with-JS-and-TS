function houseNumberSumts(a: number[]): number {
    let sum: number = 0;

    for (let i=0; i< a.length; i++) {
        if (a[i] === 0) {
            return sum;
        }
        sum += a[i];
    }

    return sum;

};

console.log(houseNumberSumts([5,1,2,3,0,1,4,5,6,8]));