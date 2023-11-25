const repeatString = function(string, num) {
    if (num >= 0) {
        let newString = "";
        for(let i = num; i > 0; i--) {
            newString = newString + string;
        }
        return newString;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
