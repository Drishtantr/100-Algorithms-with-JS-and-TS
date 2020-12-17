function quad(a) {
    let leng = Math.floor(a.length/4)
    console.log(leng);
    let neww = ''
    const divv = a.length%4;
    console.log(divv);
    for (let i=0; i<a.length; i+=4) {
        if (a[i+3] === undefined) {
            for(let k=0; k<divv; k++){
                neww += a[k+i];
            }
        } else {
            neww = neww + `${a[i+2]}${a[i+3]}${a[i]}${a[i+1]}`
        }
    }
    return neww;
}

console.log(quad('ABCDEFGHIJ'));