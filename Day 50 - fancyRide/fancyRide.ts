function fancyRidets(a: number[], mile: number): string {
    a = a.sort().reverse();
    const car: string[] = ['UberSUV', 'UberBlack', 'UberPlus', 'UberXL', 'UberX']
    for (let i=0; i<a.length; i++) {
        if (a[i]*mile <= 20) {
            return car[i];
        } 
    }
};

console.log(fancyRidets([0.3, 0.5, 0.7, 1, 1.3], 30));