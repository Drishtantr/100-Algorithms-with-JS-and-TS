function absoluteValuesSumMinimizationjs(a) {
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 -1] : a[Math.floor(a.length / 2)]
}

console.log(absoluteValuesSumMinimizationjs([2, 4, 7]))
console.log(absoluteValuesSumMinimizationjs([2, 4, 7, 6]))
console.log(absoluteValuesSumMinimizationjs([2, 4, 7, 6, 6]))