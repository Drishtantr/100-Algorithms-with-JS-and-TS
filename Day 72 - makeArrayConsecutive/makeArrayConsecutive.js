function makeArrayConsecutive(a) {
    const sortArray = a.sort((a,b) => a-b);
    let count = 0;
    for (let i=sortArray[0]; i<sortArray[sortArray.length-1]; i++) {
        if( !a.includes(i)) {
            count++;
        }
    }
    return count;
}

console.log(makeArrayConsecutive([6,2,3,8]));