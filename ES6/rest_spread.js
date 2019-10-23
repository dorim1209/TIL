//ES5
const addNumbers = (a, b, c, d, e) => {
  const numbers = [a, b, c, d, e];
  return numbers.reduce((acc, num) => (acc += num), 0);
};

const addAll = (...numbers) => {
  console.log(numbers);
  return numbers.reduce((acc, num) => (acc += num), 0);
};
console.log(addAll(1, 2, 3, 4, 5, 6, 7));

const defaultColors = ["red", "blue", "yellow"];
const addedColors = ["orange", "green"];

const sum = defaultColors.concat(addedColors);
const es6sum = [...defaultColors, ...addedColors];
const justsum = [defaultColors, addedColors];
console.log(sum);
console.log(es6sum);
console.log(justsum);

function logging() {
  console.log(arguments);
  console.log(...arguments);
}
logging(1, 2, 3, 4);

console.log("예시");
function loggin(a, b) {
  [a, b, ...rest] = arguments;
  console.log(rest);
}
logging(1, 2, 3, 4);
