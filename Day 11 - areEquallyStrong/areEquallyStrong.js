function areEquallyStraong(myLeft, myRight, friendLeft, friendRight) {
    var myWeakest = myLeft < myRight ? myLeft: myRight;
    var friendWeakest = friendLeft < friendRight ? friendLeft: friendRight;
    var myStrongest = myLeft > myRight ? myLeft: myRight;
    var friendStrongest = friendLeft > friendRight ? friendLeft: friendRight;
    return myWeakest === friendWeakest && myStrongest === friendStrongest;
}

console.log(areEquallyStraong(10,15, 15, 10));
console.log(areEquallyStraong(15, 10, 15, 10));
console.log(areEquallyStraong(15, 10, 15, 9));