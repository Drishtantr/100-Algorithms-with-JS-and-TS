function areSimilar(a , b) {
    var c = [];
    var d = [];

    if (a.toString() === b.toString()) {
        return true;
    };

    for (var i = 0; i<a.length; i++) {
        if (a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d.reverse();
    

    if(c.length===a.length-1 && d.toString()===c.toString()) {
        return true;
    }

    return false;

}

console.log(areSimilar([1,2,3],[1,2,3]));
console.log(areSimilar([1,2,3], [2,1,3]));
console.log(areSimilar([1,2,2],[2,1,1]));