function validTime(time) {
    let hour = time.substring(0, time.lastIndexOf(':'));
    let mins = time.substring(time.lastIndexOf(':')+1);
    return (parseInt(hour)<=24 && parseInt(hour)>=0) && (parseInt(mins)<60 && parseInt(mins)>=0);
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));