function sortByLengthts(a: string[]): string[] {
    return a.sort((a1: string, a2: string) => a1.length - a2.length );
}

console.log(sortByLengthts(['abc','','zz','aaa','a']));