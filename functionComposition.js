const sum = (numA, numB) => numA + numB;

const divide = (numC, numD) => numC / numD;

const compose = (fnA, fnB) => (numE, numF, numG) => fnB(fnA(numE, numF), numG);

const divideSumResult = compose(sum, divide);

console.log(divideSumResult(50, 150, 2)); // 100
