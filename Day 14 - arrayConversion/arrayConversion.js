function arrayConversion(a) {
    let isOdd = true;

    while (a.length !== 1) {
        a = sumProduct(a, isOdd);
        isOdd = !isOdd;
    }

    return a[0];
};

function sumProduct(num, isOdd) {
    const sumProd = [];

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



console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));