function firstDuplicatets(a: number[]): number {
    const firstDup: object = {};

    for(let num of a) {
        if(firstDup.hasOwnProperty(num)) {
            return num;
        }
        firstDup[num] = num;

    }

    return -1;

};

console.log(firstDuplicatets([2,1,3,5,3,2]));
console.log(firstDuplicatets([2,4,3,5,1]));