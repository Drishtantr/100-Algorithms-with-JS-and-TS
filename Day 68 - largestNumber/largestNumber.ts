function largestNumberts(n: number): number{
    var largest = '';
    while (n>0)  {
        largest = largest+ '9';
        n--;
    }

    return parseInt(largest);

}

console.log(largestNumberts(2));
console.log(largestNumberts(5));