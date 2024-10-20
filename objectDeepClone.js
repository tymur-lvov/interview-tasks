const object = { a: 1, b: 2, c: { d: 3, e: 4 }, f: null };

//const objectDeepClone =

const clonedObject = objectDeepClone(object);

console.log(clonedObject);
console.log(clonedObject.c === object.c);
