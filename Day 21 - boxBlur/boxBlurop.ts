function boxBlurtsop(a: number[][]): number[][] {
    var res = [];

    for(let i=0; i<a.length-2; i++) {
        const line = [];

        for (let j=0; j<a[i].length-2; j++) {
            let sum = 0;
            let count = 0;
            for (let k=j; k<j+3; k++) {
                for (let l=j; l<j+3; l++){
                    sum += a[k][l];
                    count++;
                }
            }
            line.push(Math.floor(sum/count));
        }
        res.push(line);
    }
    return res;

};

console.log(boxBlurtsop([[1,1,1],[1,7,1],[1,1,1]]));