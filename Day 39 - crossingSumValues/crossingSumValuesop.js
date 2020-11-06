function crossingSumValues(matrix, a, b) {
    let asum = matrix[a].reduce((a,b) => a+b);
    let bsum = 0;

    for (let i=0; i<matrix.length; i++) {
        if(i!==a) {
            bsum += matrix[i][b];
        }
    }

    return asum+bsum;
};

console.log(crossingSumValues([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 1, 3));