function sortByLength(a) {
    return a.sort((a1,a2) => a1.length - a2.length );

}

console.log(sortByLength(['abc','','zz','aaa','a']));