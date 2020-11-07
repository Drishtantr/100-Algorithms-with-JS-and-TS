function depositProfitts(deposit: number, rate: number, threshold: number): number {
    let year: number = 0;
    let bal: number = deposit;
    while (threshold > bal) {
        year++;
        bal = bal + (bal*rate)/100;
    }

    return year;
};

console.log(depositProfitts(100,20,170));