const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(numbers) {
  let sum = 0;
  numbers.forEach((element) => {
    if (!isNaN(Number(element))) {
      sum += Number(element);
    }
  });
  return sum;
};

const multiply = function(numbers) {
  return numbers.reduce((result,element) => {
    return result * element;
  },1);
};

const power = function(x,y) {
  let result = x
	for (let i = 1; i < y; i++) {
    result *= x;
  }
  return result;
};

const factorial = function(x) {
	let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact *=i;
  }
  return fact
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
