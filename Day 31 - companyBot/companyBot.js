function companyBot(a) {
    var sum = 0;
    var count = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i][1] === 1) {
            sum += a[i][0];
            count ++;
        }
    }
    count = count === 0? 1: count;
    const points = sum/count;
    return points.toFixed(1);

};

console.log(companyBot([[3,1], [6,1], [4,1], [5,1]]));
console.log(companyBot([[4,1], [4,-1], [0,0], [6,1]]));
console.log(companyBot([[4,-1], [0,0], [5,-1]]));