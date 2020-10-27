function circleOfNumbersts(n: number, number: number) {
    const numArray: number[] =[];
    const mid: number = n / 2;

    for (let i: number=0; i<n; i++) {
        numArray.push(i);
    };

    if (number<mid){
        return numArray[number+mid];
    };

    return numArray[number-mid];
    
};

console.log(circleOfNumbersts(8, 2));