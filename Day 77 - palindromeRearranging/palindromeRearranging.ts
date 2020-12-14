function palindromeRearrangingts(inputStr: string): boolean {
    const chars: string[] = inputStr.split('');
    const charCount: object = {};
    let oddCount = 0;

    for(let char of chars) {
        if (charCount.hasOwnProperty(char)) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for(let key in charCount) {
        if(charCount[key] %2 !== 0) {
            oddCount++;
        }
    }

    return oddCount >1;

};

console.log(palindromeRearrangingts('aababb'));