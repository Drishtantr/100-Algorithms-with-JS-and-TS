function checkPalindromets(a: string): string {
    const first: string = a.toLowerCase();
    const second: string = first.split('').reverse().join('');
    return first === second ? 'palindrome' : 'Not Palindrome';

};

console.log(checkPalindromets('abba'));
console.log(checkPalindromets('aBba'));
console.log(checkPalindromets('acba'));
console.log(checkPalindromets('a'));