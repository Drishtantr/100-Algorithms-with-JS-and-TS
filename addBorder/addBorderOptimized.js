function addBorderjs(a) {
    const wall = '*'.repeat(a[0].length + 2);
    const test = '*'.repeat(10); // **********

    a.unshift(wall);
    a.push(wall);

    for(i=1; i<=a.length-3; i++) {
        a[i] = '*' + a[i] + '*'
    }

    return a;

}

console.log(addBorderjs(['abc', 'def']));