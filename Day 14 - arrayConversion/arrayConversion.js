function arrayConversion(a) {
    var arr = [];
    for (var i=0; i<a.length; i++) {
        if (i%2 === 0){
            var sum = a[i] + a[i+1];
        }
    }
};

console.log(arrayConversion([1,2,3,4,5,6,7,8]));