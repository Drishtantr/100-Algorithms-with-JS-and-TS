function longestString(a: string[]): string[] {
    var longest = 0;
    var longString = [];
    a.forEach(word => {
        longest = word.length > longest ? word.length : longest;
    });
    a.forEach(word => {
        if (word.length===longest) {
            longString.push(word);
        }
    });

    return longString;
}

console.log(longestString(['aaa','a','cat','no']));