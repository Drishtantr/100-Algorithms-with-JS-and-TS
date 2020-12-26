function shapeAreats(n: number): number {
    let area: number = 1;

    for (let i: number=1; i<n; i++) {
        area += 4*i; 
    }

    return area;

}

console.log(shapeAreats(2));
console.log(shapeAreats(3));