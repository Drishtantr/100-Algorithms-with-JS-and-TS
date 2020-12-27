function sortByHeightts(a: number[]): number[] {
    const b: number[] = a.filter((element) => {
        if (element !== -1) {
            return element;
        }
    }).sort((a,b) => a-b);

    let inedexx: number = 0;

    for (let i: number=0; i<a.length; i++) {
        if (a[i] !== -1) {
            a[i] = b[inedexx];
            inedexx++;
        }
    }

    return a;

}

console.log(sortByHeightts([-1,150,190,170,-1,-1,160,180]));