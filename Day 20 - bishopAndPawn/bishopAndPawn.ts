function bishopAndPawnts(bishop: string, pawn: string): boolean {
    const pos: object = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
    }
    const bishopX: number = pos[bishop[0]];
    const bishopY: number = parseInt(bishop[1]);
    const pawnX: number = pos[pawn[0]];
    const pawnY: number = parseInt(pawn[1]);
    console.log(bishopX, bishopY, pawnX, pawnY);

    if (bishopX+pawnX === bishopY+pawnX || bishopX+pawnY === bishopY+pawnX) {
        return true;
    }

    return false;

};

console.log(bishopAndPawnts('a1', 'c3'));