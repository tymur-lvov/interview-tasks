const calculateFactorial = (num) => {
  if (num === 1 || num === 0) return 1;

  return calculateFactorial(num - 1) * num;
};

console.log(calculateFactorial(5)); // 120
