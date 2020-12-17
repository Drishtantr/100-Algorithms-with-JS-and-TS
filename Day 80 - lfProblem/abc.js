function findd(n,p) {
    const sqr = Math.pow(n, 1/p)
    console.log(sqr);
    if (n%sqr === 0) {
        return 1;
    }
    return 0;
}

console.log(findd(16,2));
console.log(findd(27, 2));