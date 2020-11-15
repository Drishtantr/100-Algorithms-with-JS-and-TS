function extractMatrixColumn(a, k){
    const extr = [];
    a.forEach(row => extr.push(row[k]));
    return extr;
};

console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 2));