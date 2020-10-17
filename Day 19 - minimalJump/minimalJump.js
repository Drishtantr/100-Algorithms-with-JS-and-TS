function minimalJump(a) {
    a.sort();
    console.log(a);
    let dif = a[0] +1;
    let count = 1;
    for (let i=0; i<a.length; i++) {
        if ((a[i+1] - a[i]===1)) {
            count+=1;
        }  
    }
    console.log(count);      
    dif=count>dif ? dif+count: dif;
    return dif;


};

console.log(minimalJump([5,3,6,7,9]));