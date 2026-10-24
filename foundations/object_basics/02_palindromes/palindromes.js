function isAlpha(c) {
    let code = c.charCodeAt(0);
    return ((code > 47 && code < 56) || (code > 64 && code < 91) || (code > 96 && code < 123));
}

const palindromes = function (str) {
    let len = str.length;
    let i = 0;
    let j = len - 1;
    str = str.toLowerCase();
    while(i < j) {
        while(!isAlpha(str[i])) i++;
        while(!isAlpha(str[j])) j--;

        if(str[i++] != str[j--]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
