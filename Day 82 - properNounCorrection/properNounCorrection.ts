function properNounCorrectionts(name: string): string {
    return `${name[0].toUpperCase()}${name.toLowerCase().slice(1,name.length)}`;
}
console.log(properNounCorrectionts('pArIs'));
console.log(properNounCorrectionts('driSHTAnT'));