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

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(power, of) {
	let product = 1
  for (let i = 0; i < of; i++) {
    product *= power;
  }
  return product;
};

const factorial = function(factor) {
	let value = 1;
  for (let i = 1; i <= factor; i++) {
    value *= i; 
  }
  return value;
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
