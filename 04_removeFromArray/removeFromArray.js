const removeFromArray = function(array, ...removed) {
    let result = [];
    for (element of array) {
        if (!removed.includes(element)) {
            result.push(element);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
