function caseSensitivePalindrome(a) {
    const org = a.toLowerCase();
    const rev = org.split('').reverse().join('');
    return rev === org;
};

console.log(caseSensitivePalindrome('AabAa'));
console.log(caseSensitivePalindrome('Aabca'));