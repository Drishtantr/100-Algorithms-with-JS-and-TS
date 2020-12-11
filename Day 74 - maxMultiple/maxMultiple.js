function maxMultiple(divisor, bound) {
    let maxDiv = divisor;

    for(let i=divisor+1; i<bound+1; i++) {
        if (i%divisor === 0) {
            maxDiv = i;
        }
    }
    return maxDiv;


}


console.log(maxMultiple(3,10));