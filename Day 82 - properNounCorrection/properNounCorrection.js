function properNounCorrection(name) {
    return `${name[0].toUpperCase()}${name.toLowerCase().slice(1,name.length)}`;
}
console.log(properNounCorrection('pArIs'));
console.log(properNounCorrection('driSHTAnT'));