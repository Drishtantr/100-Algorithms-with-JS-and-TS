function pagesNumberingWithInkts(current: number, noOfDigits: number): number {
    while (noOfDigits >= current.toString().length) {
        noOfDigits -= current.toString().length;

        if (noOfDigits >= current.toString().length) {
            current++;
        }
    }
    return current;
}

console.log(pagesNumberingWithInkts(1,5));
console.log(pagesNumberingWithInkts(21,5));
console.log(pagesNumberingWithInkts(8,4));