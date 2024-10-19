const object = { a: 1, b: 2, c: { d: 3, e: 4 }, f: null };

const objectDeepClone = (obj) => {
  return Object.keys(obj).reduce((acc, el) => {
    if (typeof obj[el] === 'object' && obj[el] !== null) {
      acc[el] = objectDeepClone(obj[el]);
    } else {
      acc[el] = obj[el];
    }

    return acc;
  }, {});
};

const clonedObject = objectDeepClone(object);

console.log(clonedObject);
console.log(clonedObject.c === object.c);
