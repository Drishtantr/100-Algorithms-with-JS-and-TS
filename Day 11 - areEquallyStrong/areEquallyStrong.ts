function areEquallyStraongts(myLeft: number, myRight: number, friendLeft: number, friendRight: number): boolean {
    var myWeakest = myLeft < myRight ? myLeft: myRight;
    var friendWeakest = friendLeft < friendRight ? friendLeft: friendRight;
    var myStrongest = myLeft > myRight ? myLeft: myRight;
    var friendStrongest = friendLeft > friendRight ? friendLeft: friendRight;
    return myWeakest === friendWeakest && myStrongest === friendStrongest;
}

console.log(areEquallyStraongts(10,15, 15, 10));
console.log(areEquallyStraongts(15, 10, 15, 10));
console.log(areEquallyStraongts(15, 10, 15, 9));