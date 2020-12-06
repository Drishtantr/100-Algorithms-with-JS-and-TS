function lateRide(n) {
    const hr = Math.floor(n/60);
    const min = n % 60;
    const time = hr.toString().concat(min.toString()).split('').map(element => parseInt(element)).reduce((a,b) => a+b);
    return time;

}

console.log(lateRide(240));
console.log(lateRide(808));