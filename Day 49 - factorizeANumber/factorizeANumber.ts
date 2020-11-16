function factorizeANumberts(a: number): number {
    var fac = 1;
    for (let i = a; i>0; i--) {
        fac *= i;
    }
    return fac;
};

console.log(factorizeANumberts(5));
console.log(factorizeANumberts(10));