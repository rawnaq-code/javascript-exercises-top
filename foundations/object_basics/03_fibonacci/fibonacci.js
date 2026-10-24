const fibonacci = function(n) {
    if(n < 1 || !Number.isInteger(n)) return "OOPS";

    let n1 = 1, n2 = 1;
    let n3 = n1 + n2;
    while(n-- > 1) {
        n1 = n2;
        n2 = n3;
        n3 = n1 + n2;
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
