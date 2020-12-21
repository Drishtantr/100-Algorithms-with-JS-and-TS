function ratingThreshold(threshold, ratings) {
    let count = 0;
    for (let i=0; i<ratings.length; i++) {
        let sum = 0;
        for (let j=0; j<ratings[i].length; j++ ) {
            sum += ratings[i][j]
        }
        if ((sum/ratings[i].length) < threshold) {
            count ++;
        }
    }
    return count;
}

console.log(ratingThreshold(3.5, [[3,4],[3,3,3,4], [4]]));