function chessBoxColorts(a: string,b: string): boolean {
    const conv: object = { 'A': 1, 'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,}
    const x: number = parseInt(conv[a[0]]) + parseInt(a[1]);
    const y: number = parseInt(conv[b[0]]) + parseInt(b[1]);
    return x%2 === y%2;
}

console.log(chessBoxColorts('A1', 'C3'));
console.log(chessBoxColorts('A1', 'H3'));