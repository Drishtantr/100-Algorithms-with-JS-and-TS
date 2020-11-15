function extractMatrixColumn(a, k){
    const extr = [];

    for (let i = 0; i<a.length; i++) {
        for (let j =0; j<a[i].length; j++) {
            if(j === 2) {
                extr.push(a[i][j]);
            }
        }
    }

    return extr;

};

console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 2));