function companyBotts(a: number[][]) {
    var sum: number = 0;
    var count: number = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i][1] === 1) {
            sum += a[i][0];
            count ++;
        }
    }
    const points: number = sum/count;
    return points || 0;

};

console.log(companyBotts([[3,1], [6,1], [4,1], [5,1]]));
console.log(companyBotts([[4,1], [4,-1], [0,0], [6,1]]));
console.log(companyBotts([[4,-1], [0,0], [5,-1]]));