function checkPalindrome(a) {
    const first = a.toLowerCase();
    const second = first.split('').reverse().join('');
    return first === second ? 'palindrome' : 'Not Palindrome';

};

console.log(checkPalindrome('abba'));
console.log(checkPalindrome('aBba'));
console.log(checkPalindrome('acba'));
console.log(checkPalindrome('a'));