function makeArrayConsecutivets(a: number[]): number {
    const sortArray: number[] = a.sort((a,b) => a-b);
    let count: number = 0;
    for (let i: number=sortArray[0]; i<sortArray[sortArray.length-1]; i++) {
        if( !a.includes(i)) {
            count++;
        }
    }
    return count;
}

console.log(makeArrayConsecutivets([6,2,3,8]));