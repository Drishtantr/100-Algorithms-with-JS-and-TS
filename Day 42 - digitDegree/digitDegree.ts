function digitDegreets(a: number): number {
    let count = 0;
    let currrentNo = a;

    if (a<=9) {
        return count;
    } else {
        while(true) {
            count++;
            let num = currrentNo.toString().split('').map((element) => parseInt(element));
            currrentNo = num.reduce((a,b) => {
                return a+b;
            });

            if(currrentNo <= 9) {
                break;
            }
        }
    }
    return count;
};

console.log(digitDegreets(5));
console.log(digitDegreets(100));
console.log(digitDegreets(91));