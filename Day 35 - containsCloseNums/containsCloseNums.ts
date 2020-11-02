function containsCloseNumsts(arr: number[], k: number): boolean {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if (i !==j && arr[i]===arr[j]) {
                var diff: number = Math.abs(j-i);
                return diff <= k
            }
        }
    }
};

console.log(containsCloseNumsts([0,1,2,3,5,2],3));
console.log(containsCloseNumsts([0,1,2,3,5,2],2));