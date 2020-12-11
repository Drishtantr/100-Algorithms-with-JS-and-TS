function maxMultiplets(divisor: number, bound: number): number {
    let maxDiv = divisor;

    for(let i=divisor+1; i<bound+1; i++) {
        if (i%divisor === 0) {
            maxDiv = i;
        }
    }
    return maxDiv;


}


console.log(maxMultiplets(3,10));