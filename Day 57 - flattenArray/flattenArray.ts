function flattenArrayts(a: any[]): any[] {
    return a.flat();
};

console.log(flattenArrayts([1,2, [3,4], [[5,6]]]));