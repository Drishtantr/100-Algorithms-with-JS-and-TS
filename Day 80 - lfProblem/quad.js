function quad(a) {
    let leng = Math.floor(a.length/4)
    console.log(leng);
    let neww = ''
    for (let i=0; i<a.length; i+=4) {
        neww = neww + `${a[i+2]}${a[i+3]}${a[i]}${a[i+1]}`
    }
    return neww;
}

console.log(quad('ABCDEFGH'));