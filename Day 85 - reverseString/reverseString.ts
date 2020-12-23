function reverseStringts(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseStringts('Hello'));
console.log(reverseStringts('Oh No'));