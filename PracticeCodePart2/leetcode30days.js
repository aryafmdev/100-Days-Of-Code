// Day 01 - 30 Days JS - LeetCode
// closures
// #2667 - Create Hello World Function
const createHelloWorld = () => () => 'Hello World';

// Day 02 - 30 Days JS - LeetCode
// closures
// #2620 - counter
const createCounter = (n) => () => n++;

// Day 03 - 30 Days JS - LeetCode
// closures
// #2704 - to be or not to be
const expect = (val) => ({
  toBe: (v) =>
    v === val
      ? true
      : (() => {
          throw 'Not Equal';
        })(),
  notToBe: (v) =>
    v !== val
      ? true
      : (() => {
          throw 'Equal';
        })(),
});

// Day 04 - 30 Days JS - LeetCode
// closures
// #2665 - counter II
const createCounter2 = (init) => {
  let val = init;
  return {
    increment: () => ++val,
    decrement: () => --val,
    reset: () => (val = init),
  };
};

// Day 05 - 30 Days JS - LeetCode
// basic array transformations
// #2635 - apply transform over each element
const map = (arr, fn) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) res.push(fn(arr[i], i));
  return res;
};

// Day 06 - 30 Days JS - LeetCode
// basic array transformations
// #2634 - filter elements from array
const filter = (arr, fn) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i], i)) res.push(arr[i]);
  return res;
};

// Day 07 - 30 Days JS - LeetCode
// basic array transformations
// #2626 - array reduce transformations
const reduce = (nums, fn, init) => {
  let val = init;
  for (let n of nums) val = fn(val, n);
  return val;
};

// Day 08 - 30 Days JS - LeetCode
// function transformations
// #2629 - function composition
const compose = (funcs) => (x) => funcs.reduceRight((v, f) => f(v), x);

// Day 09 - 30 Days JS - LeetCode
// function transformations
// #2703 - return length of argument passed
const argumentsLength = (...args) => args.length;

// Day 10 - 30 Days JS - LeetCode
// function transformations
// #2666 - allow one function call
const once = (fn) => {
  let called = false,
    result;
  return (...args) =>
    called ? undefined : ((called = true), (result = fn(...args)));
};

// Day 11 - 30 Days JS - LeetCode
//
// #

// Day 12 - 30 Days JS - LeetCode
//
// #

// Day 13 - 30 Days JS - LeetCode
//
// #

// Day 14 - 30 Days JS - LeetCode
//
// #

// Day 15 - 30 Days JS - LeetCode
//
// #

// Day 16 - 30 Days JS - LeetCode

// Day 17 - 30 Days JS - LeetCode

// Day 18 - 30 Days JS - LeetCode

// Day 19 - 30 Days JS - LeetCode

// Day 20 - 30 Days JS - LeetCode

// Day 21 - 30 Days JS - LeetCode

// Day 22 - 30 Days JS - LeetCode

// Day 23 - 30 Days JS - LeetCode

// Day 24 - 30 Days JS - LeetCode

// Day 25 - 30 Days JS - LeetCode

// Day 26 - 30 Days JS - LeetCode

// Day 27 - 30 Days JS - LeetCode

// Day 28 - 30 Days JS - LeetCode

// Day 29 - 30 Days JS - LeetCode

// Day 30 - 30 Days JS - LeetCode
