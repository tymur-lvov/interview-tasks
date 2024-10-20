const multiplyCurried = (...args) => {
  if (args.length < 2) {
    return multiplyCurried.bind(null, ...args);
  }

  const multiplyResult = args[0] * args[1];

  console.log(multiplyResult);

  return multiplyCurried.bind(null, multiplyResult);
};

console.log(multiplyCurried(6)(2)(3)(2));
