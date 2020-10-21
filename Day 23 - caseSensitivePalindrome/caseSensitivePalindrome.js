function caseSensitivePalindrome(a) { 
    a = a.toLowerCase();
    let result = a.split('');
    result = result.reverse();
    result = result.join('');
    return result === a;

};

console.log(caseSensitivePalindrome('AabAa'));
console.log(caseSensitivePalindrome('Aabca'));