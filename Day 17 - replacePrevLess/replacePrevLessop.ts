function replacePrevLessopts(a: number[]): number[] {
    var b: number[] = [];
    for(let i = a.length-1; i>=0; i--) {
        for(let j=i; j>=0; j--) {
            if(a[i] > a[j]) {
                b.unshift(a[j]);
                break;
            } else if (j===0) {
                b.unshift(-1);
            }
        }
    };
    return b;
};

console.log(replacePrevLessopts([1,5,2,4,5]));