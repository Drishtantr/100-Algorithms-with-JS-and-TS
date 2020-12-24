function seatsInTheatre(tcol, trow, col, row) {
    const colDif = tcol - col +1;
    const rowDif = trow - row;
    return colDif * rowDif;
}

console.log(seatsInTheatre(16,11,5,3));