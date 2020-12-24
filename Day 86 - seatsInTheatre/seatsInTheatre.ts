function seatsInTheatrets(tcol: number, trow: number, col: number, row: number): number {
    const colDif: number = tcol - col +1;
    const rowDif: number = trow - row;
    return colDif * rowDif;
}

console.log(seatsInTheatrets(16,11,5,3));