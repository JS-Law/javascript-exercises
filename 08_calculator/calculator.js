const add = function(num, nums) {
  return num + nums;
};

const subtract = function(num, nums) {
	return num - nums;
};

const sum = function(arr) {
  let sum = 0
	if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    for (let i = 0; i < arr.length; ++i) {
      sum += arr[i];
    }
    return sum;
  }
};

const multiply = function(num, nums) {
  let product = num * nums;
  return product;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
