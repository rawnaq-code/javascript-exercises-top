const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sumn = arr.reduce((sum, item) => sum += item, 0);
  return sumn;
};

const multiply = function(arr) {
  let mul = arr.reduce((m, item) => m *= item, 1);
  return mul;
};

const power = function(base, exponent) {
  let pow = 1;
	for(let i = 0; i < exponent; i++) {
    pow *= base;
  }
  return pow;
};

const factorial = function(n) {
	let fact = 1;
  for(let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
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
