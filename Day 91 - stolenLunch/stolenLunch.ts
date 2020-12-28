function stolenLunchts(a: string): string {
    const b: string[] = a.split('');
    const dict: object = {
        'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5', 'g': '6', 'h': '7', 'i': '8', 'j': '9', 
        '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', '6': 'g', '7': 'h', '8': 'i', '9': 'j', 
    }
    let retChar: string = '';

    for(let char of b) {
        retChar += dict.hasOwnProperty(char) ? dict[char] : char;
    }

    return retChar;

}

console.log(stolenLunchts('You\'ll n4v4r 6u4ss 8t: cdja'));