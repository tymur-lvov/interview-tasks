const sum = (numF, numG) => numF + numG;

const divide = (numD, numE) => numD / numE;

const compose = (fnA, fnB) => (numA, numB, numC) => fnA(fnB(numA, numB), numC);

const divideMultiplicationResult = compose(divide, sum);

console.log(divideMultiplicationResult(50, 150, 2)); // 100
