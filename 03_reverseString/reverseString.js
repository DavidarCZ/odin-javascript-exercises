const reverseString = function(quote) {
    let result = '';
    for (let i = quote.length - 1; i >= 0; i--) {
        result += quote[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
