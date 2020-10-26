function chunkyMonkeyts(a: any[], n: number): any[][] {
    var b: any[] =[];
    console.log(a.slice(0,n))
    console.log(a.slice(n, a.length))
    b.push(a.slice(0,n));
    if (n<a.length) b.push(a.slice(n, a.length));
    return b;

};

console.log(chunkyMonkeyts([1,2,3,4,5],3));
console.log(chunkyMonkeyts(['a','b','c','d','e'],2));