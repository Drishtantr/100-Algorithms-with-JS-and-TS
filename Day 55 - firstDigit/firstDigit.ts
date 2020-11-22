function firstDigitts(a: string): string {
    for(let i=0; i<a.length; i++) {
        if (parseInt(a[i]) || parseInt(a[i])===0) {
            return a[i];
        }
    }
    return 'No number found';
};

console.log(firstDigitts('var_1_app'));
console.log(firstDigitts('q2q5'));
console.log(firstDigitts('0ss'));