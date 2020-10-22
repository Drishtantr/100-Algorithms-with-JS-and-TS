function centuryFromYearts(year: number): number {
    if (year%100===0){
        return year/100;
    };
    return Math.floor(year/100)+1;
};

console.log(centuryFromYearts(1805));
console.log(centuryFromYearts(1700));