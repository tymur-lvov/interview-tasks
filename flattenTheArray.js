const array = [1, 2, 3, [4, 5, 6, { a: 1, b: 2 }], 7, 8];

const flattenTheArray = (initArr) => {
  return initArr.reduce((newArr, initArrEl) => {
    if (Array.isArray(initArrEl)) {
      newArr.push(...flattenTheArray(initArrEl));
    } else {
      newArr.push(initArrEl);
    }

    return newArr;
  }, []);
};

console.log(flattenTheArray(array));
