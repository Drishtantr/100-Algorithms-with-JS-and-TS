function houseOfCats(legs) {
    const people = [];

    while (legs>=2) {
        var count = legs/2;
        if (count) {
            people.unshift(count);
        }
        legs -=4;
    }
    return people;

};

console.log(houseOfCats(6));
console.log(houseOfCats(4));