const multiplyCurried = (...args) => {
  if (args.length < 2) {
    return multiplyCurried.bind(null, ...args);
  }

  const result = args[0] * args[1];

  console.log(result);

  return multiplyCurried.bind(null, result);
};

console.log(multiplyCurried(6)(2)(3)(2));
