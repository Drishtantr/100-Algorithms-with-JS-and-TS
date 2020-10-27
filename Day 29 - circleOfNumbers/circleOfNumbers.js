function circleOfNumbers(n, number) {
    const numArray =[];
    const mid = n / 2;

    for (i=0; i<n; i++) {
        numArray.push(i);
    };

    if (number<mid){
        return numArray[number+mid];
    };

    return numArray[number-mid];
    
};

console.log(circleOfNumbers(8, 2));