const repeatString = function(str, n) {
    if(n < 0) return 'ERROR';
    let newString = "";
    for(let i = 0; i < n; i++) {
        newString += str;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
