function validTimeop(time: string): boolean {
    const [hour,mins] = time.split(':');
    return (parseInt(hour)<=24 && parseInt(hour)>=0) && (parseInt(mins)<60 && parseInt(mins)>=0);
}

console.log(validTimeop('13:58'));
console.log(validTimeop('25:51'));
console.log(validTimeop('02:76'));