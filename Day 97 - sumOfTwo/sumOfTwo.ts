function sumOfTwots(a: number[],b: number[],y:number): boolean {
    for (let i: number=0; i<a.length; i++) {
        for (let j: number=0; j<b.length; j++) {
            if (a[i]+b[j] === y) {
                return true;
            }
        }
    }
    return false;

}

console.log(sumOfTwots([1,2,3],[10,20,30,40], 42));