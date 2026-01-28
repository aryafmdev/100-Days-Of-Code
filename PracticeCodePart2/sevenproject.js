// // 1. Array Utilities (map, filter, reduce)

// const myMap = (arr, fn) => {
//   let res = [];
//   for (let i=0; i<arr.length; i++) res.push(fn(arr[i], i));
//   return res;
// };

// const myFilter = (arr, fn) => {
//   let res = [];
//   for (let i=0; i<arr.length; i++) if (fn(arr[i], i)) res.push(arr[i]);
//   return res;
// };

// const myReduce = (arr, fn, init) => {
//   let acc = init;
//   for (let i=0; i<arr.length; i++) acc = fn(acc, arr[i]);
//   return acc;
// };


// const myMap = (arr, fn) => arr.map(fn);
// const myFilter = (arr, fn) => arr.filter(fn);
// const myReduce = (arr, fn, init) => arr.reduce(fn, init);

// // 2. String Processing (Palindrome)

// const isPalindrome = (str) => {
//   const clean = str.toLowerCase().replace(/\s+/g, "");
//   return clean === clean.split("").reverse().join("");
// };

// console.log(isPalindrome("Race car")); // true


// const isPalindrome = str => {
//   const clean = str.toLowerCase().replace(/\s+/g, "");
//   return clean === [...clean].reverse().join("");
// };

// // 3. Number & Math Logic

// const factorial = (n) => {
//   let res = 1;
//   for (let i=2; i<=n; i++) res *= i;
//   return res;
// };

// const isPrime = (n) => {
//   if (n<2) return false;
//   for (let i=2; i<=Math.sqrt(n); i++) if (n%i===0) return false;
//   return true;
// };


// const factorial = n => n <= 1 ? 1 : n * factorial(n-1);

// const isPrime = n => n > 1 && [...Array(Math.floor(Math.sqrt(n)))]
//   .map((_, i) => i+2)
//   .every(x => n % x !== 0);

// // 4. Object & JSON Handling

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// const getValue = (obj, key) => obj[key];

// const parseJSON = (str) => {
//   try { return JSON.parse(str); }
//   catch { return null; }
// };


// const mergeObjects = (o1, o2) => ({ ...o1, ...o2 });
// const getValue = (obj, key) => obj?.[key];
// const parseJSON = str => { try { return JSON.parse(str); } catch { return null; } };

// // 6. Date & Time Utility

// const formatDate = (date) => {
//   return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
// };

// const daysBetween = (d1, d2) => {
//   const diff = Math.abs(d2 - d1);
//   return Math.floor(diff / (1000*60*60*24));
// };

// console.log(daysBetween(new Date("2024-01-01"), new Date("2024-01-10"))); // 9


// const formatDate = d => `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
// const daysBetween = (d1, d2) => Math.floor(Math.abs(d2-d1)/(1000*60*60*24));
