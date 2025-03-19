const palindromes = function (input) {
    input = input.replace(/[,!.?\s]/g, "").toLowerCase();
    for (let i = 0; i < input.length/2; i++) {
        if(input.at(i)!==input.at(input.length-1-i)){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
