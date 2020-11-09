function digitDegree(a) {
    var b = Math.floor(a/10);
    var count = 1;
    while (b!==0) {
        count ++;
        b = Math.floor(b/10);
    }
    return count;
};

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));