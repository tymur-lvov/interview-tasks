const asyncFunc1 = async (x) => x + 1;
const asyncFunc2 = async (x) => x * 2;

const funcs = [asyncFunc1, asyncFunc2];

const result = await funcs.reduce(async (acc, func) => {
  const resolvedAcc = await acc;
  return func(resolvedAcc);
}, Promise.resolve(5));

console.log(result);
