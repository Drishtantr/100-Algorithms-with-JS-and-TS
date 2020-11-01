function confirmEnding(str, target) {
    const diff = str.length - target.length;
    return str.substr(diff) === target;
};

console.log(confirmEnding('abstraction','action'));
console.log(confirmEnding('open sesame','pen'));