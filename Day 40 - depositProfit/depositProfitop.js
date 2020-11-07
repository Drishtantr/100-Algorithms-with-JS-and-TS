function depositProfit(deposit, rate, threshold) {
    let year = 0;
    let bal = deposit;
    while (threshold > bal) {
        year++;
        bal = bal + (bal*rate)/100;
    }

    return year;
};

console.log(depositProfit(100,20,170));