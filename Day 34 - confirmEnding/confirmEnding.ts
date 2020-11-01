function confirmEndingts(str: string, target: string): boolean {
    const diff: number = str.length - target.length;
    return str.substr(diff) === target;
};

console.log(confirmEndingts('abstraction','action'));
console.log(confirmEndingts('open sesame','pen'));