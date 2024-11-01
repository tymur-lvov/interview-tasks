const array = [1, 2, 3, [4, 5, 6, { a: 1, b: 2 }], 7, 8];

const flattenTheArray = (arr) => {
  return arr.reduce((newArr, el) => {
    if (!Array.isArray(el)) {
      newArr.push(el);
    } else {
      newArr.push(...flattenTheArray(el));
    }

    return newArr;
  }, []);
};

console.log(flattenTheArray(array));
