function lateRidets(n: number): number {
    const hr: number = Math.floor(n/60);
    const min: number = n % 60;
    const time: number = hr.toString().concat(min.toString()).split('').map(element => parseInt(element)).reduce((a,b) => a+b);
    return time;

}

console.log(lateRidets(240));
console.log(lateRidets(808));