function incorrectPasswordAttemptsts(a: string[]): boolean {
    let count = 0;
    for (let i=0; i<a.length; i++) {
        if (a[i] === '1111') {
            count = 0;;
        } else {
            count +=1;
        }
        if (count >= 10) {
            return true;
        }
    }
    return false;

};

console.log(incorrectPasswordAttemptsts(['1111','2222','3333','4444','5555','6666','7777','8888','9999','0000','1234','1111']));