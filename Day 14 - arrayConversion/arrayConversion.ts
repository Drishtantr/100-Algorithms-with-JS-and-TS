function arrayConversionts(a: number[]): number {
    let isOdd: boolean = true;

    while (a.length !== 1) {
        a = sumProductts(a, isOdd);
        isOdd = !isOdd;
    }

    return a[0];
};

function sumProductts(num: number[], isOdd:boolean): number[] {
    const sumProd: number[] = [];

    if(isOdd) {
        for(let i=0; i<num.length; i+=2) {
            sumProd.push(num[i] + num[i+1]);
        }
    } else {
        for(let i=0; i<num.length; i+=2) {
            sumProd.push(num[i] * num[i+1]);
        }
    }

    return sumProd;
}



console.log(arrayConversionts([1, 2, 3, 4, 5, 6, 7, 8]));