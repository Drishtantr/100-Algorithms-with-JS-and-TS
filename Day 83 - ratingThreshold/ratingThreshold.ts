function ratingThresholdts(threshold: number, ratings: number[][]): number {
    let count: number = 0;
    for (let i: number=0; i<ratings.length; i++) {
        let sum: number = 0;
        for (let j: number =0; j<ratings[i].length; j++ ) {
            sum += ratings[i][j]
        }
        if ((sum/ratings[i].length) < threshold) {
            count ++;
        }
    }
    return count;
}

console.log(ratingThresholdts(3.5, [[3,4],[3,3,3,4], [4]]));