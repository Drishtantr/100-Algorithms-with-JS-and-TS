function bishopAndPawn(bishop, pawn) {
    const pos = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
    }
    const bishopX = pos[bishop[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnX = pos[pawn[0]];
    const pawnY = parseInt(pawn[1]);
    console.log(bishopX, bishopY, pawnX, pawnY);

    if (bishopX+pawnX === bishopY+pawnX || bishopX+pawnY === bishopY+pawnX) {
        return true;
    }

    return false;

};

console.log(bishopAndPawn('a1', 'c3'));