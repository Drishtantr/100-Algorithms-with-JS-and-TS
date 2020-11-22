function firstDigit(a) {
    for(let i=0; i<a.length; i++) {
        if (parseInt(a[i]) || parseInt(a[i])===0) {
            return a[i];
        }
    }
    return 'No number found';
};

console.log(firstDigit('var_1_app'));
console.log(firstDigit('q2q5'));
console.log(firstDigit('0ss'));