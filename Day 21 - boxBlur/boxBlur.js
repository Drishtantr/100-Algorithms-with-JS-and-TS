function boxBlur(a) {
    var sum = 0;
    var count=0;
    for(let i=0; i<a.length; i++) {
        for (let j=0; j<a[i].length; j++) {
            sum += a[i][j];
            count++;
        }
    }
    return (Math.floor(sum/count));

};

console.log(boxBlur([[1,1,1],[1,7,1],[1,1,1]]));