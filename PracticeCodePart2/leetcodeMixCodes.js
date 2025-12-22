// 1. [#2667] Create Hello World Function
// https://leetcode.com/problems/create-hello-world-function/
// const createHelloWorld = () =>
//   () => "Hello World";

// 2. [#2620] Counter
// https://leetcode.com/problems/counter/
// const createCounter = (n) => () => n++;

// 3. [#2666] Allow One Function Call
// https://leetcode.com/problems/allow-one-function-call/
// const once = (fn) => {
//   let called = false;
//   return (...args) => {
//     if (called) return undefined;
//     called = true;
//     return fn(...args);
//   };
// };

// 4. [#2704] To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/
// const expect = (val) => ({
//   toBe: (v) => {
//     if (val !== v) throw new Error("Not Equal");
//     return true;
//   },
//   notToBe: (v) => {
//     if (val === v) throw new Error("Equal");
//     return true;
//   },
// });

// 5. [#2715] Expect Exception
// https://leetcode.com/problems/expect-exception/

// 6. [#2703] Return Length of Arguments Passed
// https://leetcode.com/problems/return-length-of-arguments-passed/

// 7. [#2665] Create Counter II
// https://leetcode.com/problems/create-counter-ii/

// 8. [#2635] Apply Transform Over Each Element in Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

// 9. [#2727] Make Hello World Function Call N Times
// https://leetcode.com/problems/make-hello-world-function-call-n-times/

// 10. [#2723] Add Two Promises
// https://leetcode.com/problems/add-two-promises/

////////////////////////////////////////////////////////////////////////////////////////////

// 258. Add Digits
// let addDigits = function (num) {
//   while (num >= 10) {                  // selama num masih punya lebih dari 1 digit
//     let sum = 0;                       // wadah kosong untuk menampung hasil penjumlahan digit
//     let temp = num;                    // salinan angka yang akan dipecah

//     while (num > 0) {                  // selama masih ada digit di temp
//       sum += temp % 10;                // ambil digit terakhir dan tambahkan ke sum
//       temp = Math.floor(temp/10);      // buang digit terakhir
//     }
//     num = sum;                         // ganti num dengan hasil penjumlahan digit
//   }
//   return num;                          // kalau sudah 1 digit kembalikan hasilnya
// };

let addDigits = function(num) {
  if (num===0) return 0;
  return 1+(num-1)%9;
};

console.log(addDigits(38));