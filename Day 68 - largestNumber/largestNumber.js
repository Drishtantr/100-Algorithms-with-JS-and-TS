function largestNumber(n){
    var largest = '';
    while (n>0)  {
        largest = largest+ '9';
        n--;
    }

    return parseInt(largest);

}

console.log(largestNumber(2));
console.log(largestNumber(5));