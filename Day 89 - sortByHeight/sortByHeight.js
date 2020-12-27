function sortByHeight(a) {
    const b = a.filter((element) => {
        if (element !== -1) {
            return element;
        }
    }).sort((a,b) => a-b);

    let inedexx = 0;

    for (let i=0; i<a.length; i++) {
        if (a[i] !== -1) {
            a[i] = b[inedexx];
            inedexx++;
        }
    }

    return a;

}

console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]));