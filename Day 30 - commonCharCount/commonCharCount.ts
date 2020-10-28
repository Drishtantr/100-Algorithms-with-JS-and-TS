function commonCharCountts(c1: string, c2: string): number {
    const c1arr: string[] = c1.split('');
    const c2arr: string[] = c2.split('');

    const c1obj: object = retobjts(c1arr);
    const c2obj: object = retobjts(c2arr);

    console.log(c1obj, c2obj);
    let total: number = 0;

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

function retobjts(carr: string[]): object {
    const wordCount: object = {};

    for (let i=0; i<carr.length; i++) {
        if (wordCount.hasOwnProperty(carr[i])) {
            wordCount[carr[i]]++;
        } else {
            wordCount[carr[i]] = 1;
        }
    }
    return wordCount;
}


console.log(commonCharCountts('aabcc', 'adcaa'));