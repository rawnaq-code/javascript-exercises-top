const sumAll = function(n1, n2) {
    if(!(Number.isInteger(n1)) || !(Number.isInteger(n2)) || (n1 < 0) || (n2 < 0)) return 'ERROR';

    let n1Sum = parseInt((n1 * (n1 + 1)) / 2);
    let n2Sum = parseInt((n2 * (n2 + 1)) / 2);
    let totalSum = (n1 > n2) ? (n1Sum - n2Sum + n2) : (n2Sum - n1Sum + n1);
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
