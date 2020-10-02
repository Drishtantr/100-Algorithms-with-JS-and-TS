function addNumberjs(a, b) {
    return (a+b);
}
function addNumber2js(...a) {
    let total = 0;

    a.forEach(num => {
        total+=num;
    });

    return total;
}

console.log(addNumberjs(2,3))
console.log(addNumber2js(2,3,4,5,6,7))