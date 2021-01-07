function validTimets(time: string): boolean {
    let hour: string = time.substring(0, time.lastIndexOf(':'));
    let mins: string = time.substring(time.lastIndexOf(':')+1);
    return (parseInt(hour)<=24 && parseInt(hour)>=0) && (parseInt(mins)<60 && parseInt(mins)>=0);
}

console.log(validTimets('13:58'));
console.log(validTimets('25:51'));
console.log(validTimets('02:76'));