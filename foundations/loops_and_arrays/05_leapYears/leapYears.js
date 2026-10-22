const leapYears = function(year) {
    let divBy4 = year % 4;
    let divBy100 = year % 100;
    let divBy400 = year % 400;

    if(divBy400 == 0 || (divBy100 != 0 && divBy4 == 0)) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
