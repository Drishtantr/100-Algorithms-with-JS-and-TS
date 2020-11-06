function crossingSumValuests(matrix: number[][], a:number, b: number) {
    let asum: number = matrix[a].reduce((a,b) => a+b);
    let bsum: number = 0;

    for (let i=0; i<matrix.length; i++) {
        if(i!==a) {
            bsum += matrix[i][b];
        }
    }

    return asum+bsum;
};

console.log(crossingSumValuests([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 1, 3));