function caseSensitivePalindromets(a: string): boolean { 
    a = a.toLowerCase();
    let result: any = a.split('');
    result = result.reverse();
    result = result.join('');
    return result === a;

};

console.log(caseSensitivePalindromets('AabAa'));
console.log(caseSensitivePalindromets('Aabca'));