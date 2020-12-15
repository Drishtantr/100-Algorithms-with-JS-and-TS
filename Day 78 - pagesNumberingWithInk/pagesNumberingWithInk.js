function pagesNumberingWithInk(current, noOfDigits) {
    while (noOfDigits >= current.toString().length) {
        noOfDigits -= current.toString().length;

        if (noOfDigits >= current.toString().length) {
            current++;
        }
    }
    return current;
}

console.log(pagesNumberingWithInk(1,5));
console.log(pagesNumberingWithInk(21,5));
console.log(pagesNumberingWithInk(8,4));