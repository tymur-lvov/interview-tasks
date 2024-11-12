const compareObjects = (objA, objB) => {
  if (objA === null || objB === null) {
    if (objA === null && objB !== null) {
      return false;
    } else {
      return true;
    }
  }

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (const key in objA) {
    if (JSON.stringify(objA[key]) !== JSON.stringify(objB[key])) {
      return false;
    }

    if (typeof objA[key] === 'object' && typeof objB[key] === 'object') {
      return compareObjects(objA[key], objB[key]);
    }
  }

  return true;
};

console.log(compareObjects({ a: { b: null, c: 3 }, c: 2 }, { a: { b: null, c: 3 }, c: 2 }));
