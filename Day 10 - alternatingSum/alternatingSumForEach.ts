function alternatingSumtseach(a: number[]): number[] {
    var firstA=0;
    var secondA=0;
    a.forEach((element, i) => {
        if (i%2===0) {
            firstA+= element;
        } else {
            secondA+=element;
        }        
    });
    return [firstA, secondA];
}

console.log(alternatingSumtseach([50,60,60,45,70,1]));