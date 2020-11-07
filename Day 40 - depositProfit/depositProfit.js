function depositProfit(deposit, rate, threshold) {
    let year = 0;
    let bal = deposit;
    while (true) {
        year++;
        bal = bal + (bal*rate)/100;
        if (bal >= threshold) {
            return year;
        }
    }
};

console.log(depositProfit(100,20,170));