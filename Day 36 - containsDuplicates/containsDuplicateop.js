function containsDuplicate(a) {
    a = a.sort((a,b) => a-b);
    console.log(a);
    for (let i=0; i<a.length-1; i++) {
        if (a[i] === a[i+1]) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([3,1]));