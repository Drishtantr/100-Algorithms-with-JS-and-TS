function factorizeANumber(a) {
    var fac = 1;
    for (let i = a; i>0; i--) {
        fac *= i;
    }
    return fac;
};

console.log(factorizeANumber(5));
console.log(factorizeANumber(10));