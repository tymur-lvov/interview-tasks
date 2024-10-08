const calculateFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * calculateFactorial(num - 1);
};

console.log(calculateFactorial(5));
