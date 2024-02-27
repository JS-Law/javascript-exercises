const fibonacci = function(input) {
    const n = +input; // Convert input to a number
    if (n < 0) return "OOPS";
    let a = 0, b = 1, temp;

    for (let i = 0; i < n; i++) {
        temp = a;
        a = b;
        b = temp + b;
    }

    return a;
};

module.exports = fibonacci;



