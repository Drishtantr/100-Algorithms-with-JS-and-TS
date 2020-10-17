function minimalJump(a) {
    a=a.sort((a,b) => a-b);
    const larg = a[a.length-1]; 

    
    for (let i=1; i<=larg+1; i++) {
        if (a.every((element) => (element % i) !== 0)) {
            return i;
        }  
    } 
};

console.log(minimalJump([5,3,6,7,9]));