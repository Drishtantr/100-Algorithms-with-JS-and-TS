function maxMultiple(divisor, bound) {
    return bound - (bound%divisor);
}


console.log(maxMultiple(3,10));