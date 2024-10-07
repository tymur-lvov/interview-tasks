const array = [1, 2, 3, [1, 2, 3, { a: 4, b: 5 }], 4, 5];

const FlattenTheArray = (arr) => {
  return arr.reduce((acc, el) => {
    if (!Array.isArray(el)) {
      acc.push(el);
    } else {
      acc.push(...FlattenTheArray(el));
    }
    return acc;
  }, []);
};

console.log(FlattenTheArray(array));
