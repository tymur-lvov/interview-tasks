const makeCounter = () => {
  let counter = 0;

  const incrementByValue = (value) => {
    counter += value;

    return counter;
  };

  const decrementByValue = (value) => {
    counter -= value;

    return counter;
  };

  const getCounterValue = () => {
    return counter;
  };

  return { incrementByValue, decrementByValue, getCounterValue };
};
