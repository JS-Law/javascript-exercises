
const reverseString = function(string) {
    // if (string === "") return "ERROR"
    let revString = ""
    for (var i = string.length - 1; i >= 0; i--) {
        revString += string[i];
    }
    return revString // Needed to RETURN the string!!!!!
};

// Do not edit below this line
module.exports = reverseString;

// PSEUDOCODE 
// TAKE STRING
// ITERATE BACKWARD FROM LAST LETTER AND ADD TO NEW STR
// 
// 
// 
// 
// 