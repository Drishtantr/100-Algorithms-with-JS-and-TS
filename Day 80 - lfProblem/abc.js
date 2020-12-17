function findd(n) {
    const sqr = Math.sqrt(n);
    if (n%sqr === 0) {
        return 1;
    }
    return 0;
}

console.log(findd(16));
console.log(findd(6));