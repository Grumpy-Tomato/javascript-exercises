const palindromes = stringToCheck => {
    let newStringToCheck = stringToCheck.toLowerCase().replace(/[\s\.,?!]/g, "");
    return newStringToCheck.split("").reverse().join("") === newStringToCheck;
};

// Do not edit below this line
module.exports = palindromes;
