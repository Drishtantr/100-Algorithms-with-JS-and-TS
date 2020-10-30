function compareIntegers(a,b) {
    if (parseInt(a) > parseInt(b)) {
        var compare = 'less';
    } else if (parseInt(a) <  parseInt(b)) {
        var compare = 'more';
    } else {
        var compare = 'equal';
    }

    return compare;
    
};

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));