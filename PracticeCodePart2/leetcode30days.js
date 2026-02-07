// 2621. Sleep

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2723. Add Two Promises

// const addTwoPromises = async (promise1, promise2) => {
//   let [a, b] = await Promise.all([promise1, promise2]);
//   return a + b;
// };

// 2623. Memoize

// const memoize = fn => {
//   const cache = {};
//   return (...args) => cache[args] ??= fn(...args);
// };

// const memoize = fn => {
//   const cache = new Map();
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

// 2666. Allow One Function Call

// const once = fn => {
//   let called = false;
//   return (...args) => {
//       if (called) return undefined;
//       called = true;
//       return fn(...args)
//   };
// };

// 2703. Return Length of Arguments Passed

// const argumentsLength = (...args) => args.length;

// 2629. Function Composition

// const compose = (functions) => {
//   return (x) => {
//    let result = x;
//    for (let i=functions.length-1; i>=0; i--) {
//        result = functions[i] (result);
//    }
//    return result;
//   }
// };

// 2626. Array Reduce Transformation

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   for (let i=0; i<nums.length; i++) {
//       acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

//  2634. Filter Elements From Array

// const filter = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       if(fn(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// };

// 2635. Apply Transform Over Each Element in Array

// const map = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };

// 2665. Counter II

// const createCounter = (init) => {
//   let value = init;
//   return {
//       increment: () => ++value,
//       decrement: () => --value,
//       reset: () => (value=init),
//   }
// };

// 2704. To Be Or Not To Be

// const expect = (val) => {
//   return {
//       toBe(other) {
//           if (val === other) return true;
//           throw new Error("Not Equal");
//       },
//       notToBe(other) {
//           if (val !== other) return true;
//           throw new Error("Equal");
//       },
//   }
// };

// 2620. Counter

// const createCounter = (n) => () => n++; 

// 2627. Create Hello World Function

// const createHelloWorld = () => () => "Hello World";

// 258. Add Digits

// const addDigits = (num) => {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// 1929. Concatenation of Array

// const getConcatenation = (nums) => {
//   return nums.concat(nums);
// };

// 485. Max Consecutive Ones

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = nums[i]===1 ? currentCount+1 : 0;
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };

// ============================

// 2715. Timeout Cancellation

// const cancellable = (fn, args, t) => {
//   const timer = setTimeout(() => fn(...args), t); // jadwalkan eksekusi setelah t ms
//   return () => clearTimeout(timer); // fungsi cancel untuk membatalkan
// };

// 2621. Sleep

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2723. Add Two Promises

// const addTwoPromises = async (promise1, promise2) => {
//   let [a, b] = await Promise.all([promise1, promise2]);
//   return a + b;
// };

// 2623. Memoize

// const memoize = fn => {
//   const cache = {};
//   return (...args) => cache[args] ??= fn(...args);
// };

// const memoize = fn => {
//   const cache = new Map();
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

// 2666. Allow One Function Call

// const once = fn => {
//   let called = false;
//   return (...args) => {
//       if (called) return undefined;
//       called = true;
//       return fn(...args)
//   };
// };

// 2703. Return Length of Arguments Passed

// const argumentsLength = (...args) => args.length;

// 2629. Function Composition

// const compose = (functions) => {
//   return (x) => {
//    let result = x;
//    for (let i=functions.length-1; i>=0; i--) {
//        result = functions[i] (result);
//    }
//    return result;
//   }
// };

// 2626. Array Reduce Transformation

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   for (let i=0; i<nums.length; i++) {
//       acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

//  2634. Filter Elements From Array

// const filter = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       if(fn(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// };

// 2635. Apply Transform Over Each Element in Array

// const map = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };

// 2665. Counter II

// const createCounter = (init) => {
//   let value = init;
//   return {
//       increment: () => ++value,
//       decrement: () => --value,
//       reset: () => (value=init),
//   }
// };

// 2704. To Be Or Not To Be

// const expect = (val) => {
//   return {
//       toBe(other) {
//           if (val === other) return true;
//           throw new Error("Not Equal");
//       },
//       notToBe(other) {
//           if (val !== other) return true;
//           throw new Error("Equal");
//       },
//   }
// };

// 2620. Counter

// const createCounter = (n) => () => n++; 

// 2627. Create Hello World Function

// const createHelloWorld = () => () => "Hello World";

// 258. Add Digits

// const addDigits = (num) => {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// 1929. Concatenation of Array

// const getConcatenation = (nums) => {
//   return nums.concat(nums);
// };

// 485. Max Consecutive Ones

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = nums[i]===1 ? currentCount+1 : 0;
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };

// ======================================

// 2725. Interval Cancellation

// const cancellable = (fn, args, t) => {
//   fn(...args);
//   const timer = setInterval(() => fn(...args), t);
//   return () => clearInterval(timer); 
// };

// 2715. Timeout Cancellation

// const cancellable = (fn, args, t) => {
//   const timer = setTimeout(() => fn(...args), t); 
//   return () => clearTimeout(timer); 
// };

// 2621. Sleep

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2723. Add Two Promises

// const addTwoPromises = async (promise1, promise2) => {
//   let [a, b] = await Promise.all([promise1, promise2]);
//   return a + b;
// };

// 2623. Memoize

// const memoize = fn => {
//   const cache = {};
//   return (...args) => cache[args] ??= fn(...args);
// };

// const memoize = fn => {
//   const cache = new Map();
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

// 2666. Allow One Function Call

// const once = fn => {
//   let called = false;
//   return (...args) => {
//       if (called) return undefined;
//       called = true;
//       return fn(...args)
//   };
// };

// 2703. Return Length of Arguments Passed

// const argumentsLength = (...args) => args.length;

// 2629. Function Composition

// const compose = (functions) => {
//   return (x) => {
//    let result = x;
//    for (let i=functions.length-1; i>=0; i--) {
//        result = functions[i] (result);
//    }
//    return result;
//   }
// };

// 2626. Array Reduce Transformation

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   for (let i=0; i<nums.length; i++) {
//       acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

//  2634. Filter Elements From Array

// const filter = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       if(fn(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// };

// 2635. Apply Transform Over Each Element in Array

// const map = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };

// 2665. Counter II

// const createCounter = (init) => {
//   let value = init;
//   return {
//       increment: () => ++value,
//       decrement: () => --value,
//       reset: () => (value=init),
//   }
// };

// 2704. To Be Or Not To Be

// const expect = (val) => {
//   return {
//       toBe(other) {
//           if (val === other) return true;
//           throw new Error("Not Equal");
//       },
//       notToBe(other) {
//           if (val !== other) return true;
//           throw new Error("Equal");
//       },
//   }
// };

// 2620. Counter

// const createCounter = (n) => () => n++; 

// 2627. Create Hello World Function

// const createHelloWorld = () => () => "Hello World";

// 258. Add Digits

// const addDigits = (num) => {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// 1929. Concatenation of Array

// const getConcatenation = (nums) => {
//   return nums.concat(nums);
// };

// 485. Max Consecutive Ones

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = nums[i]===1 ? currentCount+1 : 0;
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };

// ======================================

// 2637. Promise Time Limit

// const timeLimit = (fn, t) => {
//   return async (...args) => {
//     const timeout = new Promise((_, reject) =>
//       setTimeout(() => reject("Time Limit Exceeded"), t)
//     );
//     return Promise.race([fn(...args), timeout]);
//   };
// };

// 2725. Interval Cancellation

// const cancellable = (fn, args, t) => {
//   fn(...args);
//   const timer = setInterval(() => fn(...args), t);
//   return () => clearInterval(timer); 
// };

// 2715. Timeout Cancellation

// const cancellable = (fn, args, t) => {
//   const timer = setTimeout(() => fn(...args), t); 
//   return () => clearTimeout(timer); 
// };

// 2621. Sleep

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2723. Add Two Promises

// const addTwoPromises = async (promise1, promise2) => {
//   let [a, b] = await Promise.all([promise1, promise2]);
//   return a + b;
// };

// 2623. Memoize

// const memoize = fn => {
//   const cache = {};
//   return (...args) => cache[args] ??= fn(...args);
// };

// const memoize = fn => {
//   const cache = new Map();
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

// 2666. Allow One Function Call

// const once = fn => {
//   let called = false;
//   return (...args) => {
//       if (called) return undefined;
//       called = true;
//       return fn(...args)
//   };
// };

// 2703. Return Length of Arguments Passed

// const argumentsLength = (...args) => args.length;

// 2629. Function Composition

// const compose = (functions) => {
//   return (x) => {
//    let result = x;
//    for (let i=functions.length-1; i>=0; i--) {
//        result = functions[i] (result);
//    }
//    return result;
//   }
// };

// 2626. Array Reduce Transformation

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   for (let i=0; i<nums.length; i++) {
//       acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

//  2634. Filter Elements From Array

// const filter = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       if(fn(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// };

// 2635. Apply Transform Over Each Element in Array

// const map = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };

// 2665. Counter II

// const createCounter = (init) => {
//   let value = init;
//   return {
//       increment: () => ++value,
//       decrement: () => --value,
//       reset: () => (value=init),
//   }
// };

// 2704. To Be Or Not To Be

// const expect = (val) => {
//   return {
//       toBe(other) {
//           if (val === other) return true;
//           throw new Error("Not Equal");
//       },
//       notToBe(other) {
//           if (val !== other) return true;
//           throw new Error("Equal");
//       },
//   }
// };

// 2620. Counter

// const createCounter = (n) => () => n++; 

// 2627. Create Hello World Function

// const createHelloWorld = () => () => "Hello World";

// 258. Add Digits

// const addDigits = (num) => {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// 1929. Concatenation of Array

// const getConcatenation = (nums) => {
//   return nums.concat(nums);
// };

// 485. Max Consecutive Ones

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = nums[i]===1 ? currentCount+1 : 0;
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };

// ======================================

// 2622. Cache With Time Limit

// class TimeLimitedCache {
//   constructor() {
//     this.cache = new Map();
//   }

//   set(key, value, duration) {
//     const now = Date.now();
//     const existed = this.cache.has(key) && this.cache.get(key).expire > now;
//     this.cache.set(key, { value, expire: now + duration });
//     return existed;
//   }

//   get(key) {
//     const now = Date.now();
//     const item = this.cache.get(key);
//     return item && item.expire > now ? item.value : -1;
//   }

//   count() {
//     const now = Date.now();
//     return [...this.cache.values()].filter(({ expire }) => expire > now).length;
//   }
// };

// 2637. Promise Time Limit

// const timeLimit = (fn, t) => {
//   return async (...args) => {
//     const timeout = new Promise((_, reject) =>
//       setTimeout(() => reject("Time Limit Exceeded"), t)
//     );
//     return Promise.race([fn(...args), timeout]);
//   };
// };

// 2725. Interval Cancellation

// const cancellable = (fn, args, t) => {
//   fn(...args);
//   const timer = setInterval(() => fn(...args), t);
//   return () => clearInterval(timer); 
// };

// 2715. Timeout Cancellation

// const cancellable = (fn, args, t) => {
//   const timer = setTimeout(() => fn(...args), t); 
//   return () => clearTimeout(timer); 
// };

// 2621. Sleep

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2723. Add Two Promises

// const addTwoPromises = async (promise1, promise2) => {
//   let [a, b] = await Promise.all([promise1, promise2]);
//   return a + b;
// };

// 2623. Memoize

// const memoize = fn => {
//   const cache = new Map();
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

// 2666. Allow One Function Call

// const once = fn => {
//   let called = false;
//   return (...args) => {
//       if (called) return undefined;
//       called = true;
//       return fn(...args)
//   };
// };

// 2703. Return Length of Arguments Passed

// const argumentsLength = (...args) => args.length;

// 2629. Function Composition

// const compose = (functions) => {
//   return (x) => {
//    let result = x;
//    for (let i=functions.length-1; i>=0; i--) {
//        result = functions[i] (result);
//    }
//    return result;
//   }
// };

// 2626. Array Reduce Transformation

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   for (let i=0; i<nums.length; i++) {
//       acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

//  2634. Filter Elements From Array

// const filter = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       if(fn(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// };

// 2635. Apply Transform Over Each Element in Array

// const map = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };

// 2665. Counter II

// const createCounter = (init) => {
//   let value = init;
//   return {
//       increment: () => ++value,
//       decrement: () => --value,
//       reset: () => (value=init),
//   }
// };

// 2704. To Be Or Not To Be

// const expect = (val) => {
//   return {
//       toBe(other) {
//           if (val === other) return true;
//           throw new Error("Not Equal");
//       },
//       notToBe(other) {
//           if (val !== other) return true;
//           throw new Error("Equal");
//       },
//   }
// };

// 2620. Counter

// const createCounter = (n) => () => n++; 

// 2627. Create Hello World Function

// const createHelloWorld = () => () => "Hello World";

// 258. Add Digits

// const addDigits = (num) => {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// 1929. Concatenation of Array

// const getConcatenation = (nums) => {
//   return nums.concat(nums);
// };

// 485. Max Consecutive Ones

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = nums[i]===1 ? currentCount+1 : 0;
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };

// ======================================

// 2721. Execute Asynchronous Functions in Parallel

// const promiseAll = (functions) => 
//   new Promise((resolve, reject) => {
//     const results = [];
//     let done = 0;

//     functions.forEach((fn, i) => {
//       fn()
//         .then(res => {
//           results[i] = res;
//           if (++done === functions.length) resolve(results);
//         })
//         .catch(reject);
//     });
//   });

// 2627. Debounce

// const debounce = (fn, t) => {                  
//   let timerId;                                 
//   return (...args) => {                        
//     clearTimeout(timerId);                    
//     timerId = setTimeout(() => fn(...args), t);
//   };
// };

// 2622. Cache With Time Limit

// const TimeLimitedCache = function() {
//   this.cache = new Map();
// };

// TimeLimitedCache.prototype.set = function(key, value, duration) {
//   let exists = this.cache.has(key);
//   if (exists) clearTimeout(this.cache.get(key).timer);
//   let timer = setTimeout(() => this.cache.delete(key), duration);
//   this.cache.set(key, {value, timer});
//   return exists;
// };

// TimeLimitedCache.prototype.get = function(key) {
//   return this.cache.has(key) ? this.cache.get(key).value : -1;
// };

// TimeLimitedCache.prototype.count = function() {
//   return this.cache.size;
// };

// 2637. Promise Time Limit

// const timeLimit = (fn, t) => {
//   return async (...args) => {
//     const timeout = new Promise((_, reject) =>
//       setTimeout(() => reject("Time Limit Exceeded"), t)
//     );
//     return Promise.race([fn(...args), timeout]);
//   };
// };

// 2725. Interval Cancellation

// const cancellable = (fn, args, t) => {
//   fn(...args);
//   const timer = setInterval(() => fn(...args), t);
//   return () => clearInterval(timer); 
// };

// 2715. Timeout Cancellation

// const cancellable = (fn, args, t) => {
//   const timer = setTimeout(() => fn(...args), t); 
//   return () => clearTimeout(timer); 
// };

// 2621. Sleep

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2723. Add Two Promises

// const addTwoPromises = async (promise1, promise2) => {
//   let [a, b] = await Promise.all([promise1, promise2]);
//   return a + b;
// };

// 2623. Memoize

// const memoize = fn => {
//   const cache = new Map();
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

// 2666. Allow One Function Call

// const once = fn => {
//   let called = false;
//   return (...args) => {
//       if (called) return undefined;
//       called = true;
//       return fn(...args)
//   };
// };

// 2703. Return Length of Arguments Passed

// const argumentsLength = (...args) => args.length;

// 2629. Function Composition

// const compose = (functions) => {
//   return (x) => {
//    let result = x;
//    for (let i=functions.length-1; i>=0; i--) {
//        result = functions[i] (result);
//    }
//    return result;
//   }
// };

// 2626. Array Reduce Transformation

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   for (let i=0; i<nums.length; i++) {
//       acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

//  2634. Filter Elements From Array

// const filter = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       if(fn(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// };

// 2635. Apply Transform Over Each Element in Array

// const map = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };

// 2665. Counter II

// const createCounter = (init) => {
//   let value = init;
//   return {
//       increment: () => ++value,
//       decrement: () => --value,
//       reset: () => (value=init),
//   }
// };

// 2704. To Be Or Not To Be

// const expect = (val) => {
//   return {
//       toBe(other) {
//           if (val === other) return true;
//           throw new Error("Not Equal");
//       },
//       notToBe(other) {
//           if (val !== other) return true;
//           throw new Error("Equal");
//       },
//   }
// };

// 2620. Counter

// const createCounter = (n) => () => n++; 

// 2627. Create Hello World Function

// const createHelloWorld = () => () => "Hello World";

// 258. Add Digits

// const addDigits = (num) => {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// 1929. Concatenation of Array

// const getConcatenation = (nums) => {
//   return nums.concat(nums);
// };

// 485. Max Consecutive Ones

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = nums[i]===1 ? currentCount+1 : 0;
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };

// ======================================

// 2721. Execute Asynchronous Functions in Parallel

// const promiseAll = (functions) => new Promise((resolve, reject) => {
//   if (functions.length === 0) return resolve([]);
//   let results = Array(functions.length);
//   let done = 0;
//   functions.forEach((fn, i) => {
//       fn().then(res => {
//           results[i] = res;
//           if (++done === functions.length) resolve(results);
//       }).catch(reject);
//   });
// });

// 2627. Debounce

// const debounce = (fn, t) => {                  
//   let timerId;                                 
//   return (...args) => {                        
//     clearTimeout(timerId);                    
//     timerId = setTimeout(() => fn(...args), t);
//   };
// };

// 2622. Cache With Time Limit

// const TimeLimitedCache = function() {
//   this.cache = new Map();
// };

// TimeLimitedCache.prototype.set = function(key, value, duration) {
//   let exists = this.cache.has(key);
//   if (exists) clearTimeout(this.cache.get(key).timer);
//   let timer = setTimeout(() => this.cache.delete(key), duration);
//   this.cache.set(key, {value, timer});
//   return exists;
// };

// TimeLimitedCache.prototype.get = function(key) {
//   return this.cache.has(key) ? this.cache.get(key).value : -1;
// };

// TimeLimitedCache.prototype.count = function() {
//   return this.cache.size;
// };

// 2637. Promise Time Limit

// const timeLimit = (fn, t) => {
//   return async (...args) => {
//     const timeout = new Promise((_, reject) =>
//       setTimeout(() => reject("Time Limit Exceeded"), t)
//     );
//     return Promise.race([fn(...args), timeout]);
//   };
// };

// 2725. Interval Cancellation

// const cancellable = (fn, args, t) => {
//   fn(...args);
//   const timer = setInterval(() => fn(...args), t);
//   return () => clearInterval(timer); 
// };

// 2715. Timeout Cancellation

// const cancellable = (fn, args, t) => {
//   const timer = setTimeout(() => fn(...args), t); 
//   return () => clearTimeout(timer); 
// };

// 2621. Sleep

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2723. Add Two Promises

// const addTwoPromises = async (promise1, promise2) => {
//   let [a, b] = await Promise.all([promise1, promise2]);
//   return a + b;
// };

// 2623. Memoize

// const memoize = fn => {
//   const cache = new Map();
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

// 2666. Allow One Function Call

// const once = fn => {
//   let called = false;
//   return (...args) => {
//       if (called) return undefined;
//       called = true;
//       return fn(...args)
//   };
// };

// 2703. Return Length of Arguments Passed

// const argumentsLength = (...args) => args.length;

// 2629. Function Composition

// const compose = (functions) => {
//   return (x) => {
//    let result = x;
//    for (let i=functions.length-1; i>=0; i--) {
//        result = functions[i] (result);
//    }
//    return result;
//   }
// };

// 2626. Array Reduce Transformation

// const reduce = (nums, fn, init) => {
//   let acc = init;
//   for (let i=0; i<nums.length; i++) {
//       acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

//  2634. Filter Elements From Array

// const filter = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       if(fn(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// };

// 2635. Apply Transform Over Each Element in Array

// const map = (arr, fn) => {
//   let result = [];
//   for (let i=0; i<arr.length; i++) {
//       result.push(fn(arr[i], i));
//   }
//   return result;
// };

// 2665. Counter II

// const createCounter = (init) => {
//   let value = init;
//   return {
//       increment: () => ++value,
//       decrement: () => --value,
//       reset: () => (value=init),
//   }
// };

// 2704. To Be Or Not To Be

// const expect = (val) => {
//   return {
//       toBe(other) {
//           if (val === other) return true;
//           throw new Error("Not Equal");
//       },
//       notToBe(other) {
//           if (val !== other) return true;
//           throw new Error("Equal");
//       },
//   }
// };

// 2620. Counter

// const createCounter = (n) => () => n++; 

// 2627. Create Hello World Function

// const createHelloWorld = () => () => "Hello World";

// 258. Add Digits

// const addDigits = (num) => {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// 1929. Concatenation of Array

// const getConcatenation = (nums) => {
//   return nums.concat(nums);
// };

// 485. Max Consecutive Ones

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = nums[i]===1 ? currentCount+1 : 0;
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };