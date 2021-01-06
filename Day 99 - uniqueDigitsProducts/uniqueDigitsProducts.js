function uniqueDigitsProducts(dig) {
    const uniq = []
    dig.forEach(element => {
        let num = element.toString().split('').reduce((a,b) => parseInt(a)*parseInt(b));
        if (!uniq.includes(parseInt(num))) {
            uniq.push(parseInt(num));
        }        
    });
    return uniq.length;

}

console.log(uniqueDigitsProducts([2,8,121,222,42,23]));
