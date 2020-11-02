function containsCloseNums(arr, k) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if (i !==j && arr[i]===arr[j]) {
                var diff = Math.abs(j-i);
                return diff <= k
            }
        }
    }
};

console.log(containsCloseNums([0,1,2,3,5,2],3));
console.log(containsCloseNums([0,1,2,3,5,2],2));