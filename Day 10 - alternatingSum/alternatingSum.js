function alternatingSum(a) {
    var firstA=0;
    var secondA=0;
    for(var i=0; i<a.length; i++){
        if (i%2===0) {
            firstA+= a[i];
        } else {
            secondA+=a[i];
        }
    }
    return [firstA, secondA];
}

console.log(alternatingSum([50,60,60,45,70,1]));