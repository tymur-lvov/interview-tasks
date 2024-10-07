const multiplyCurried = (...args) => {
  if (args.length < 2) {
    return multiplyCurried.bind(null, ...args);
  }

  const multiplySum = args[0] * args[1];

  console.log(args[0] * args[1]);

  return multiplyCurried.bind(null, multiplySum);
};

multiplyCurried(6)(4)(2)(2);
