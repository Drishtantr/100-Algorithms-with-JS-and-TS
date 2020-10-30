function compareIntegersts(a: string,b: string): string {
    return parseInt(a) > parseInt(b)? 'more': parseInt(a) < parseInt(b)? 'less': 'equal';    
};

console.log(compareIntegersts('12', '13'));
console.log(compareIntegersts('875', '799'));
console.log(compareIntegersts('1000', '1000'));