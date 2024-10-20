const object = { a: 1, b: 2, c: { d: 3, e: 4 }, f: null };

const objectDeepClone = (obj) => {
  return Object.keys(obj).reduce((newObj, key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key] = objectDeepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
};

const clonedObject = objectDeepClone(object);

console.log(clonedObject);
console.log(clonedObject.c === object.c);
