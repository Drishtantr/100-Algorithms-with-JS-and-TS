function chessBoxColor(a,b) {
    const conv = { 'A': 1, 'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,}
    const x = parseInt(conv[a[0]]) + parseInt(a[1]);
    const y = parseInt(conv[b[0]]) + parseInt(b[1]);
    return x%2 === y%2;
}

console.log(chessBoxColor('A1', 'C3'));
console.log(chessBoxColor('A1', 'H3'));