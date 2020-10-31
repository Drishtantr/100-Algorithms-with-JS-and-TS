function composeRangests(nums: number[]): any[] {
    var range: any[] = [{start: nums[0], end: nums[0]}];
    console.log(range);
    for(let i=1; i<nums.length; i++ ) {
        if (range[range.length -1].end +1 === nums[i]) {
            range[range.length -1].end = nums[i];
        } else {
            range.push({start: nums[i], end: nums[i]});
        }
    }
    console.log(range);
    for (let i=0; i<range.length; i++) {
        if(range[i].start !== range[i].end) {
            range[i] = range[i].start + '->' + range[i].end;
        } else {
            range[i] = range[i].end.toString()
        }
    }
    return range;
};

console.log(composeRangests([-1,0,1,2,6,7,9]));