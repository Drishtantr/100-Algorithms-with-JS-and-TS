function findEmailDomain(a) {
    return a.slice(a.lastIndexOf('@')+1, a.length);
};

console.log(findEmailDomain('drishtant@gmail.com'));