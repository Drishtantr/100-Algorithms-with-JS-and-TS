function seekAndDestroy(a,b) {
    const name = [];
    for (let i=0; i<a.length; i++) {
        if (!b.includes(a[i]) && !name.includes(a[i])) {
            name.push(a[i]);
        }
    }
    return name;

}

console.log(seekAndDestroy([3,5,1,2,2],[2,3,5]));
console.log(seekAndDestroy([1,2,3,5,1,2,3],[2,3]));