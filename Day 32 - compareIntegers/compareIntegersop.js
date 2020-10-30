function compareIntegers(a,b) {
    return parseInt(a) > parseInt(b)? 'more': parseInt(a) < parseInt(b)? 'less': 'equal';    
};

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));