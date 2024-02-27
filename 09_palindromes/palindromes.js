const palindromes = function (x) {
    let normalizedStr = x.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let strReversed = normalizedStr.split('').reverse().join('');
    return normalizedStr === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
