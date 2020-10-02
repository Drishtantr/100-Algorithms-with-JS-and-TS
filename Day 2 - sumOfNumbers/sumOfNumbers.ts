function addNumber(a: number, b: number): number {
    return (a+b);
}


function addNumber2(...a: number[]): number {
    let total = 0;

    a.forEach(num => {
        total+=num;
    });

    return total;
}

console.log(addNumber(2,3));
console.log(addNumber2(2,3,4,5));