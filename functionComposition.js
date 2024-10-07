const sum = (num1, num2) => num1 + num2;
const divide = (num, divider) => num / divider;

const compose = (funA, funB) => (num1, num2, divider) => {
  return funB(funA(num1, num2), divider);
};

const divideMultiplyResult = compose(sum, divide);

console.log(divideMultiplyResult(50, 150, 2));
