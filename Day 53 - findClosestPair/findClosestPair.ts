function findClosestPairts(a: number[], sum: number): number {
    let distance = -1;

    for(let i=0; i<a.length; i++) {
        for(let j=i+1; j<a.length -1; j++) {
            const suma: number = a[i] + a[j];
            const disa: number = Math.abs(i-j);

            if (sum === suma) {
                if(distance === -1 || disa<distance) {
                    distance = disa;
                }
            }
        }
    }

    return distance;

};

console.log(findClosestPairts([1,0,2,4,3,0],5));
console.log(findClosestPairts([2,3,7],8));