function findEmailDomaints(a:string):string {
    return a.slice(a.lastIndexOf('@')+1, a.length);
};

console.log(findEmailDomaints('drishtant@gmail.com'));