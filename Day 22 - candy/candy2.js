function candy(n, m) {
    const eachChildEats = Math.floor(m/n); 
    return n* eachChildEats;   
};

console.log(candy(4, 10));