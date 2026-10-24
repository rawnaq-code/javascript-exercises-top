function getAge(birthYear, deathYear) {
    if(!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

const findTheOldest = function(peoples) {
    let oldestPeoples = peoples.sort((a, b) => {
        return (getAge(a.yearOfBirth, a.yearOfDeath) > getAge(b.yearOfBirth, b.yearOfDeath)) ? -1 : 1;
    });
    return oldestPeoples[0];
};

// Do not edit below this line
module.exports = findTheOldest;
