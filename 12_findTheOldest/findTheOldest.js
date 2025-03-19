const findTheOldest = function(persons) {
    let oldest = persons[0];
    for (const person of persons) {
        let ageOldest;
        let agePerson;

        if(oldest.yearOfDeath === undefined)
        {
            ageOldest = new Date().getFullYear() - oldest.yearOfBirth;
        }else
        {
            ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        
        if(oldest.yearOfDeath === undefined)
        {
            agePerson = new Date().getFullYear() - person.yearOfBirth;
        }else
        {
            agePerson = person.yearOfDeath - person.yearOfBirth;
        }

        if (agePerson > ageOldest) {
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
