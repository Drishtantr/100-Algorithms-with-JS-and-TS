function seekAndDestroyts(a: number[],b: number[]): number[] {
    const name: number[] = [];
    for (let i: number = 0; i<a.length; i++) {
        if (!b.includes(a[i]) && !name.includes(a[i])) {
            name.push(a[i]);
        }
    }
    return name;

}

console.log(seekAndDestroyts([3,5,1,2,2],[2,3,5]));
console.log(seekAndDestroyts([1,2,3,5,1,2,3],[2,3]));