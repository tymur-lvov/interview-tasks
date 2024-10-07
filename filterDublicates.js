const array = [1, 2, 3, 3, 4, 5, 5];

//
// Realization #1 complexity O(2^n)
//
const filteredArray = array.filter((el, idx, arr) => arr.indexOf(el) === idx);

//
// Realization #2 complexity O(2^n)
//
//const filteredArray = array.reduce((acc, el) => {
//  if (!acc.includes(el)) {
//    acc.push(el);
//  }
//  return acc;
//}, []);

//
// Realization #3 complexity 0(n)
//
//const filteredArray = [];
//const elementsMap = {};

//array.forEach((el) => {
//  if (!elementsMap[el]) {
//    elementsMap[el] = true;

//    filteredArray.push(el);
//  }
//});

//
// Realization #4 complexity 0(n)
//
//const filteredArray = [...new Set(array)];

console.log(filteredArray);
