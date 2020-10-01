function addBorder(a :string[]): string[] {
    const length = a[0].length + 2;
    var wall = ''
    for(var i=0; i<=length; i++) {
        wall= wall.concat('*');
    }

    a.unshift(wall);
    a.push(wall);

    for(i=1; i<=length-3; i++) {
        a[i] = '*' + a[i] + '*'
    }

    return a;

}

console.log(addBorder(['abc', 'def']));