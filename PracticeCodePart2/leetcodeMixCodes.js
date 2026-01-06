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

//     while (temp > 0) {                  // selama masih ada digit di temp
//       sum += temp % 10;                // ambil digit terakhir dan tambahkan ke sum
//       temp = Math.floor(temp/10);      // buang digit terakhir
//     }
//     num = sum;                         // ganti num dengan hasil penjumlahan digit
//   }
//   return num;                          // kalau sudah 1 digit kembalikan hasilnya
// };

// let addDigits = function(num) {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// console.log(addDigits(38));
// console.log(addDigits(387));
// console.log(addDigits(3876));
// console.log(addDigits(38765));
// console.log(addDigits(387654));
// console.log(addDigits(3876543));
// console.log(addDigits(38765432));

// 258  Add Digits Day 2
// let addDigits = function(num) {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// function addDigits (num) {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// function addDigits (num) {
// while (num>=10) {
//   let sum = 0;
//   let temp = num;

//   while (temp>0) {
//     sum += temp%10;
//     temp = Math.floor(temp/10);
//   }
//   num = sum;
// }
// return num;
// };

// 258 Add Digits Day 3

// let addDigits = function(num) {
//     if (num===0) return 0;
//     return 1+(num-1)%9;
// }

// function addDigits(num) {
//     if (num===0) return 0;
//     return 1+(num-1)%9;
// }


// let addDigits = function(num) {
//   while(num>=10) {
//       let sum = 0;
//       let temp = num;
      
//       while (temp>0) {
//           sum += temp%10;
//           temp = Math.floor(temp/10);
//       }
//       num = sum;
//   }
//   return num;
// }

// 258 Add Digits Day 4

// let addDigits = function(num) {
//   if(num===0) return 0;
//   return 1+(num-1)%9;
// }

// function addDigits(num) {
//   while (num>=10) {
//       let sum = 0;
//       let temp = num;
      
//       while (temp>0) {
//           sum += temp%10;
//           temp = Math.floor(temp/10);
//       }
//       num = sum;
//   }
//   return num;
// }

// 258 Add Digits Day 5

// let addDigits = function(num) {
//     if (num===0) return 0;
//     return 1+(num-1)%9;
// }

// function addDigits(num) {
//   while(num>=10) {
//       let sum = 0;
//       let temp = num;
      
//       while(temp>0) {
//           sum += temp%10;
//           temp = Math.floor(temp/10);
//       }
//       num = sum;
//   }
//   return num;
// }
//===============================

// 258 Add Digits Day 6

// let addDigits = function(num) {
//   if (num===0) return 0;
//   return 1+(num-1)%9;
// };

// function addDigits(num) {
//   while (num>=10) {
//       let sum = 0;
//       let temp = num;
      
//       while (temp>0) {
//           sum += temp%10;
//           temp = Math.floor(temp/10);
//       }
//       num = sum;
//   }
//   return num;
// };

// console.log(addDigits(38));

// 2667. Create Hello World Day 1
// let createHelloWorld = () => () => "Hello World";

// let f = createHelloWorld();
// console.log(f());

// 2620. Counter Day 1

// let createCounter = (n) => () => n++;

// let createCounter = function(n){
//   return function() {
//     return n++;
//   };
// };

// let counter = createCounter(10);
// console.log(counter());

// ======================================

// 258 Add Digits Day - 7

// let addDigits = function(num) {
//     if (num===0) return 0;
//     return 1+(num-1)%9;
// };

// function addDigits(num) {
//   while(num>=10) {
//       let sum = 0;
//       let temp = num;
      
//       while(temp>0) {
//           sum += temp%10;
//           temp = Math.floor(temp/10);
//       }
//       num = sum;
//   }
//   return num;
// }

// console.log(addDigits(234));

// 2667. create hello world Day - 2

// let createHalo = () => () => "Hallo";

// let word = createHalo();
// console.log(word());

// 2620. Counter Day - 3

// let createCounter = function(n) {
    
//     return function() {
//    		return n++;     
//     };
// };

// function createCounter(n) {
//   return function() {
//       return n++;
//   };
// };

// let counter = createCounter(2);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// ======================================
// 2667. Create hello world - Day - 3
// let createHelloWorld = () => () => "Hello World";

// let word = createHelloWorld();
// console.log(word());

// 2620. Create Counter - Day - 3

// let createCounter = function(n) {
//     return function() {
//         return n++;
//     };
// };

// function createCounter(n) {
//   return function() {
//       return n++;
//   }
// }

// let counter = createCounter(2);
// console.log(counter());

// 258. Add Digits - Day - 8

// let addDigits = function(num) {
//     if(num===0) return 0;
//     return 1+(num-1)%9;
// };

// function addDigits(num) {
//     if(num===0) return 0;
//     return 1+(num-1)%9;
// };

// let addDigits = function(num) {
//     while(num>=10) {
//         let sum = 0;
//         let temp = num;
        
//         while(temp>0) {
//             sum += temp%10;
//             temp = Math.floor(temp/10);
//         }
//         num = sum;
//     }
//     return num;
// }

// console.log(addDigits(38))

// ==============================

// 258. Add Digits - Day - 9
// let addDigits = function(num) {
//     if (num===0) return 0;
//     return 1+(num-1)%9;
// };

// function addDigits(num) {
//     if(num===0) return 0;
//     return 1+(num-1)%9;
// };

// let addDigits = function(num) {
//     while(num>=10) {
//         let sum = 0;
//         let temp = num;
        
//         while(temp>0) {
//             sum += temp%10;
//             temp = Math.floor(temp/10);
//         }
//         num = sum;
//     }
//     return num;
// };

// function addDigits(num) {
//   while(num>=10) {
//       let sum = 0;
//       let temp = num;
      
//       while(temp>0) {
//           sum += temp%10;
//           temp = Math.floor(temp/10);
//       }
//       num = sum;
//   }
//   return num;
// }

// console.log(addDigits(888));

// 2620. Counter - Day - 4
// function createCounter(n) {
//     return function() {
//         return n++;
//     };
// };

// let createCounter = (n) => () => n++;

// let counter = createCounter(8);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 2667. Hello World - Day - 4
// let HelloWorld = () => () => "Hello World";

// function createHelloWorld() {
//     return function() {
//         return "Hello World"
//     };
// };

// let word = createHelloWorld();
// console.log(word());

// LeetCode 1480 - Running Sum of 1D Array - Day -1

// const runningSum = (nums) => {
//   let sum = 0;
//   return nums.map(num => sum += num);
// };

// let runningSum = (nums) => {
//   let sum = 0;
//   return nums.map(num=>sum+=num);
// };

// console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
// console.log(runningSum([1, 1, 1, 1])); // [1, 2, 3, 4]

// ===========================================

// 1672. Richest Customer Wealth - Day - 1
// let maxWealth = (account) => Math.max(...account.map(customer=>customer.reduce((sum,bank)=>sum+bank,0)));

// console.log(maxWealth([[3,7],[7,8],[9,5]]));

// 258. Add Digits - Day - 10
// let addDigits = function(num) {
//     if (num===0) return 0;
//     return 1+(num-1)%9;
// };

// function addDigits(num) {
//     if (num===0) return 0;
//     return 1+(num-1)%9;
// };

// function addDigits(num) {
//   while (num>=10) {
//       let sum = 0;
//       let temp = num;
      
//       while (temp>0) {
//           sum += temp%10;
//           temp = Math.floor(temp/10);
//       }
//       num = sum;
//   }
//   return num;
// };

// console.log(addDigits(12345));

// 2667. Create Hello World - Day - 5
// let HelloWorld = () => () => "Hello World";

// let word = createHelloWorld();
// console.log(word());

// 2620. Counter - Day - 5
// let createCounter = (n) => () => n++;

// let counter = createCounter(8);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 1480. Running Sum 1d Array - Day - 2
// const runningSum = (nums) => {
//   let sum = 0;
//   return nums.map(num=>sum+=num);
// };
// console.log(runningSum([1,2,3,4]));

// ========================================================

// 412. FizzBuzz - Day - 1
// const fizzBuzz = (n) => 
//   Array.from({length:n}, (_, i) => {
//       const x = i + 1;
//       return x % 3 === 0 && x % 5 === 0 ? "FizzBuzz":
//         x % 3 === 0 ? "Fizz":
//         x % 5 === 0 ? "Buzz":
//         String(x);
//   });

// console.log(fizzBuzz(15));

// 258 add digits - day 11
// let addDigits = (nums) => {
//     if (nums === 0) return 0;
//     return 1+(nums-1)%9;
// };

// console.log(addDigits(11232))

// 2667 create hello world - day 6
// let createHelloWorld = () => () => "Hello World";

// let word = createHelloWorld();
// console.log(word());

// 2620 counter - day 6
// let createCounter = (n) => () => n++;

// let counter = createCounter(8);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 1480 running sum - day 3
// let runningSum = (nums) => {
//   let sum = 0;
//   return nums.map(num=>sum+=num);
// };

// console.log(runningSum([1,2,3,4]));

// 1672 richest customer - day 2
// let maxWealth = (accounts) =>
//   Math.max(...accounts.map(customer=>customer.reduce((sum, bank) => sum+bank, 0)));
//   console.log(maxWealth([[5,6],[4,8],[6,8]]));

// =====================================================

// add digits day 12

// hello world day 7

// counter day 7

// running sum day 4

// richest customer day 3

// fizzbuzz day 2

// number steps to zero day 1

// middle of the linked list day 1

// let addDigits = (num) => {
//     if(num===0) return 0;
//     return 1+(num-1)%9;
// };
// console.log(addDigits(818));

// let createHelloWorld = () => () => "Hello World";
// let word = createHelloWorld();
// console.log(word());

// let createCounter = (n) => () => n++;
// let counter = createCounter(7);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let runningSum = (nums) => {
//     let sum = 0;
//     return nums.map(num=>sum+=num);
// };
// console.log(runningSum([1,2,3,4]));

// let maxWealth = (accounts) =>
// Math.max(...accounts.map(customer=>customer.reduce((sum,bank)=>sum+bank,0)));
// console.log(maxWealth([[5,4],[3,7],[3,8]]))

// let fizzBuzz = (n) =>
// Array.from({length:n}, (_, i) => {
//     let x = i + 1;
//     return x%3===0 && x%5===0 ? "FizzBuzz":
//     x%3===0 ? "Fizz":
//     x%5===0 ? "Buzz":
//     String(x);
// });
// console.log(fizzBuzz(15));

// let numberSteps = (num) => {
//   let steps = 0;
//   while(num>0) {
//     num = num%2===0 ? num/2 : num-1;
//     steps++;
//   }
//   return steps;
// };
// console.log(numberSteps(123));

// const middleNode = (head) => {
//   let slow = head;
//   let fast = head;

//   while(fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// };

// =================================================================

// middle of the linked list day 2

// number steps to reduce to zero day 2

// fizzbuzz day 3

// richest customer wealth day 4

// running sum of array day 5

// create counter day 8

// create hello world day 8

// Add Digits day 13

// let middleNode = (head) => {
//   let slow = head;
//   let fast = head;
  
//   while(fast&&fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//   }
//   return slow;
// };

// let numberSteps = (num) => {
//   let steps = 0;
    
//   while(num>0) {
//       num = num%2===0 ? num/2 : num-1;
//       steps++;
//   }
//   return steps;
// };
// console.log(numberSteps(123));

// let fizzBuzz = (n) => Array.from({length:n}, (_, i) => {
//   let x = i + 1;
//   return x%3===0&&x%5===0 ? "FizzBuzz":
//   x%3===0? "Fizz":
//   x%5===0? "Buzz":
//   String(x);
// });
// console.log(fizzBuzz(15))

// let maxWealth = (accounts) => Math.max(...accounts.map(customer=>customer.reduce((sum,bank)=>sum+bank,0)));
// console.log(maxWealth([[4,5],[4,4],[5,6]]));

// let runningSum = (nums) => {
//   let sum = 0;
//   return nums.map(num=>sum+=num);
// };
// console.log(runningSum([1,2,3,4]));

// let createCounter = (n) => () => n++;
// let counter = createCounter(9);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let createHelloWorld = () => () => "Hello Sayang"
// let word = (createHelloWorld());
// console.log(word());

// let addDigits = (num) => {
//   if(num===0) return 0;
//   return 1+(num-1)%9; // using root digit formula
// };
// console.log(addDigits(83))

// ==================================================================

// middle of the linked list day 3

// number of steps to reduce day 3

// fizzbuzz day 4

// richest customer day 5

// running sum day 6

// counter day 9

// create hello world day 9

// add digits day 14

// const middleNode = (head) => {
//     let slow = head;
//     let fast = head;
    
//     while (fast & fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// };

// let numberSteps = (num) => {
//     let steps = 0;
//     while (num>0) {
//     num = num%2===0 ? num/2 : num-1;
//     steps++;
//     }
//     return steps;
// };
// console.log(numberSteps(123));

// let fizzBuzz = (n) => 
//   Array.from({length:n}, (_, i) => {
//       let x = i + 1;
//       return x%3===0 && x%5===0 ? "FizzBuzz":
//       x%3===0 ? "Fizz":
//       x%5===0 ? "Buzz":
//       String(x);
//   });
// console.log(fizzBuzz(15));

// let maxWealth = (accounts) =>
// Math.max(...accounts.map(customer=>customer.reduce((sum,bank) => sum+=bank, 0)));
// console.log(maxWealth([[5,5],[6,7],[8,9]]));

// let runningSum = (nums) => {
//     let sum = 0;
//     return nums.map(num=>sum+=num)
// };
// console.log(runningSum([1,2,3,4]));

// let createCounter = (n) => () => n++;
// let counter = createCounter(9);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let createHelloWorld = () => () => "Hello World";
// let word = createHelloWorld();
// console.log(word());

// const canConstruct = (ransomNote, magazine) => {
//   const charCount = new Map();
//   for (const char of magazine) {
//       charCount.set(char, (charCount.get(char) || 0) +1);
//   }
//   for (const char of ransomNote) {
//       if(!charCount.has(char) || charCount.get(char) === 0) {
//           return false;
//       }
//       charCount.set(char, charCount.get(char) -1);
//   }
//   return true;
// };
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aba"));

// ==========================================================

// // Definisi fungsi canConstruct (versi ES6 idiomatic dengan Map)
// const canConstruct = (ransomNote, magazine) => {
//   // step 1 : buat peta frekuensi karakter dari magazine
//   const charCount = new Map();
//   // step 2 : hitung jumlah setiap karakter dari magazine
//   for (const char of magazine) {
//     // Jika karakter sudah ada → tambah jumlahnya 
//     // Jika belum ada → inisialisasi dengan 1
//     charCount.set(char, (charCount.get(char) || 0) + 1);
//   }

//   // step 3 : iterasi setiap karakter di ransomnote
//   for (const char of ransomNote) {
//     // jika karakter tidak ada di magazine atau jumlahnya 0 => gagal
//     if (!charCount.has(char) || charCount.get(char) === 0) {
//       return false;
//     }
//     // jika karakter tersedia => kurangi jumlahnya (karakter dipakai sekali)
//     charCount.set(char, charCount.get(char) - 1);
//   }
  
//   // step 4 : jika semua karakter ransomNote terpenuhi => berhasil
//   return true;
// };

// // Contoh penggunaan dan menampilkan hasil ke console
// console.log(canConstruct("a", "b"));          // false → 'a' tidak ada di 'b'
// console.log(canConstruct("aa", "ab"));        // false → hanya ada 1 'a' di 'ab'
// console.log(canConstruct("aa", "aab"));       // true  → ada cukup 'a' di 'aab'
// console.log(canConstruct("abc", "cbaabc"));   // true  → semua karakter tersedia

// ==================================================================

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) +1);
//     }
//     for (const char of ransomNote) {
//         if(!charCount.has(char) || charCount.get(char) === 0) {
//             return false;
//         }
//         charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     };
//     for (const char of ransomNote) {
//         if (!charCount.has(char) || charCount.get(char) === 0) {
//             return false;
//         };
//         charCount.set(char, charCount.get(char) - 1);
//     };
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     };
//     for (const char of ransomNote) {
//         if (!charCount.has(char) || charCount.get(char) === 0) {
//             return false;
//         };
//         charCount.set(char, charCount.get(char) - 1);
//     };
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of ransomNote) {
//         if (!charCount.has(char) || charCount.get(char)===0) {
//             return false;
//         }
//         charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of ransomNote) {
//         if(!charCount.has(char) || charCount.get(char) === 0) {
//             return false;
//         }
//         charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of ransomNote) {
//         if (!charCount.has(char) || charCount.get(char) === 0) {
//             return false;
//         }
//         charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of ransomNote) {
//         if (!charCount.has(char) || charCount.get(char) === 0) {
//             return false;
//         }
//         charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of ransomNote) {
//         if (!charCount.has(char) || charCount.get(char)===0) {
//             return false;
//         }
//         charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of ransomNote) {
//         if (!charCount.has(char) || charCount.get(char)===0) {
//             return false;
//         }
//         charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// const canConstruct = (ransomNote, magazine) => {
//     const charCount = new Map();
//     for (const char of magazine) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     for (const char of ransomNote) {
//     if (!charCount.has(char) || charCount.get(char)===0) {
//         return false};
//     charCount.set(char, charCount.get(char) - 1);
//     }
//     return true;
// };

// console.log(canConstruct("a", "b"));          // false → 'a' tidak ada di 'b'
// console.log(canConstruct("aa", "ab"));        // false → hanya ada 1 'a' di 'ab'
// console.log(canConstruct("aa", "aab"));       // true  → ada cukup 'a' di 'aab'
// console.log(canConstruct("abc", "cbaabc"));   // true  → semua karakter tersedia

// ====================================================================