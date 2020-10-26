function chunkyMonkey(a, n) {
    const nested =[];
    let count = 0;
    while (count < a.length) {
        nested.push(a.slice(count, count+=n));
    }

    return nested;

};

console.log(chunkyMonkey([1,2,3,4,5],2));
console.log(chunkyMonkey(['a','b','c','d','e'],2));