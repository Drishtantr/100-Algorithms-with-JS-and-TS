function containsDuplicatets(a: number[]) {
    a = a.sort();
    for (let i=0; i<a.length-1; i++) {
        if (a[i] === a[i+1]) {
            return true;
        }
    }
    return false;

};

console.log(containsDuplicatets([1,2,3,1]));
console.log(containsDuplicatets([3,1]));