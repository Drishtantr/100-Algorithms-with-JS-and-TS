function properNounCorrectionop(name: string): string {
    const firstL = name[0].toUpperCase();
    const secondL =  name.toLowerCase().slice(1,name.length);
    return firstL.concat(secondL)
}
console.log(properNounCorrectionop('pArIs'));
console.log(properNounCorrectionop('driSHTAnT'));