function commonCharCount(c1, c2) {
    const c1arr = c1.split('');
    const c2arr = c2.split('');

    const c1obj = retobj(c1arr);
    const c2obj = retobj(c2arr);

    console.log(c1obj, c2obj);
    let total = 0;

    for (const i in c1obj) {
        console.log(i);
        if(c2obj.hasOwnProperty(i)) {
            if (c2obj[i] < c1obj[i]) {
                total += c2obj[i];
            } else {
                total += c1obj[i];
            }
        }
    }
    return total;
};

function retobj(carr) {
    const wordCount = {};

    for (let i=0; i<carr.length; i++) {
        if (wordCount.hasOwnProperty(carr[i])) {
            wordCount[carr[i]]++;
        } else {
            wordCount[carr[i]] = 1;
        }
    }
    return wordCount;
}


console.log(commonCharCount('aabcc', 'adcaa'));