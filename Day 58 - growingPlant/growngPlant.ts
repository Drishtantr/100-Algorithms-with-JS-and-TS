function growngPlantts(up: number, down: number, des: number): number {
    let height: number = 0;
    let days: number = 0;
    while (height < des) {
        days += 1;
        height += up;

        if(height < des) {
            height -= down;
        }        
    }
    return days;
};

console.log(growngPlantts(100,10,910));