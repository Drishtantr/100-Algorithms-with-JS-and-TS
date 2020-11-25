function growngPlant(up, down, des) {
    let height = 0;
    let days = 0;
    while (height < des) {
        days += 1;
        height += up;

        if(height < des) {
            height -= down;
        }
    }
    return days;

};

console.log(growngPlant(100,10,910));