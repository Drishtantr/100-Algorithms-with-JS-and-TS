function uniqueDigitsProductsts(dig: number[]): number {
    const uniq: number[] = []
    dig.forEach(element => {
        let num: number = element.toString().split('').map(char => parseInt(char)).reduce((a,b) => a*b);
        if (!uniq.includes(num)) {
            uniq.push(num);
        }        
    });
    return uniq.length;

}

console.log(uniqueDigitsProductsts([2,8,121,222,42,23]));
