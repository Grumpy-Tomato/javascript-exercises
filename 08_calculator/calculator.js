const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(item => {
    sum += item;
  });
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  array.forEach(item => {
    sum *= item;
  })
  return sum;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let sum = 1;
  for(let i = 1; i <= number ; i++) {
    sum = sum * i;
  }
  return sum;
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
