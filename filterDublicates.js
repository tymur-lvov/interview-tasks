const array = ['a', 'b', 'c', 'c', 'd', 'e', 'e'];

//
// Realization #1 complexity O(2^n)
//
//const filteredArray = array.filter((el, idx, arr) => arr.indexOf(el) === idx);
//

// Realization #2 complexity O(2^n)
//
//const filteredArray = array.reduce((acc, el) => {
//  if (!acc.includes(el)) acc.push(el);

//  return acc;
//}, []);
//

// Realization #3 complexity 0(n)
//
//const elementsMap = {};

//const filteredArray = [];

//array.forEach((el) => {
//  if (!elementsMap[el]) {
//    filteredArray.push(el);

//    elementsMap[el] = true;
//  }
//});
//

//
// Realization #4 complexity 0(n)
//
const filteredArray = [...new Set(array)];

console.log(filteredArray);
