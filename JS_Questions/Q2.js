/*
const obj = { key: "value" };
const arr = [...obj];
console.log(arr);
*/ 
//gives an error because obj is not iterable


/*
const arr = [1, 2, 3];
const obj = { ...arr };
console.log(obj);
*/
// output: { '0': 1, '1': 2, '2': 3 }. arr is iterable in js


/*
// spread operator works differently in obj {} and in arr [].
const obj = { ...true, ..."test", ...10 };
console.log(obj); // { '0': 't', '1': 'e', '2': 's', '3': 't' }
// obj accept non-iterables by just ignoring them

const arr = [...true, ..."test", ...10];
console.log(arr); // type error (true is non-iterable)
// arr requires iterables

const fn = (...args) => args; // args is an array!
const res = fn(...true, ..."test", ...10); // arr requires iterables
console.log(res); // output: type error (true is non-iterable)
*/


const isSummer = false;

const summerFruitsAmount = { watermelon: 30 };
const fruitsAmount = {
  apple: 10,
  banana: 5,
  ...(isSummer && summerFruits),  // short-circuit
}; // { apple: 10, banana: 5 }

const summerFruits = ["watermelon"];
const fruits = ["apple", "banana", ...(isSummer ? summerFruits : [])]; // ['apple', 'banana']

console.log(fruits)
