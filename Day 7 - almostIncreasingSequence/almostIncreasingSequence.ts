function almostIncreasingSequencets(a : number[]): boolean {
    var count = 0;
    for(var i = 0; i<a.length; i++) {
        if (a[i]<=a[i-1]){
            count++;
            if(a[i] <= a[i-2] && a[i+1] <= a[i-1]){
                return false;
            }
        }
    }
    return count <=1;
}

console.log(almostIncreasingSequencets([1,2,3,2,1]));
console.log(almostIncreasingSequencets([1,3,2]));