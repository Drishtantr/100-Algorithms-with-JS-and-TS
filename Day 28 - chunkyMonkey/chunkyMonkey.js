function chunkyMonkey(a, n) {
    var b =[];
    console.log(a.slice(0,n))
    console.log(a.slice(n, a.length))
    b.push(a.slice(0,n));
    if (n<a.length) b.push(a.slice(n, a.length));
    return b;

};

console.log(chunkyMonkey([1,2,3,4,5],3));
console.log(chunkyMonkey(['a','b','c','d','e'],2));