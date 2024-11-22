const parent = { parentProp: '' };
const child = Object.create(parent);

child.childProp = '';

const childProto = Object.getPrototypeOf(child);

Object.defineProperty(childProto, 'parentProp', {
  writable: false,
  configurable: false,
});

childProto.parentProp = 'value';

delete childProto.parentProp;

console.log(parent, child);
