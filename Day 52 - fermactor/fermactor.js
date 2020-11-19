function fermactor(n) {
    for (let i=1; i<n; i++) {
        for (let j=1; j<i; j++) {
            const total = i**2 - j**2;
            if (total === n) {
                return [i, j];
            }
        }
    }
};

console.log(fermactor(15));