function fareEstimatorts(time: number, distance: number, costPerMin: number[], costPerMile: number[]): number[] {
    const cost: number[] = [];
    for(let i=0; i< 4; i++) {
        cost.push(costPerMin[i]*time + costPerMile[i] * distance);
    }
    return cost;

};

console.log(fareEstimatorts(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));