function adjacentElementsProduct(a: number[]): number {
    var largest = a[0] * a[1];
    for(var i=0; i<a.length-1; i++){
        const p = a[i] *a[i+1]
        largest = p > largest ? p : largest;
    }
    return largest;
}

console.log(adjacentElementsProduct([1,5,20,6,3]));