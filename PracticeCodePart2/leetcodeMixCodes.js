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
    
//     while (fast && fast.next) {
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

// /**
//  * Fungsi untuk mencari jumlah maksimum '1' berturut-turut dalam array biner.
//  * @param {number[]} nums - Array berisi angka 0 dan 1.
//  * @returns {number} - Panjang maksimum urutan '1' berturut-turut.
//  */
// const findMaxConsecutiveOnes = (nums) => {
//   // Variabel untuk menyimpan hasil maksimum sepanjang iterasi
//   let maxCount = 0;

//   // Variabel untuk menghitung jumlah '1' berturut-turut saat ini
//   let currentCount = 0;

//   // Looping setiap elemen dalam array
//   for (const num of nums) {
//     if (num === 1) {
//       // Jika elemen adalah '1', tambahkan ke hitungan saat ini
//       currentCount++;

//       // Update hasil maksimum jika hitungan saat ini lebih besar
//       maxCount = Math.max(maxCount, currentCount);
//     } else {
//       // Jika elemen adalah '0', reset hitungan berturut-turut
//       currentCount = 0;
//     }
//   }

//   // Kembalikan hasil maksimum
//   return maxCount;
// };

// // 🔎 Contoh penggunaan:
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;

//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num === 1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//         currentCount++;
//         maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     } 
//     return maxCount;
// };

// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2

// =====================================================================

// max consecutive ones day 1 done

// ransom note day 2 done

// middle of the linked list day 4 done

// number of steps to reduce day 4 done

// fizzbuzz day 5 done

// richest customer day 6 done

// running sum day 7 done

// counter day 10 done

// create hello world day 10 done

// add digits day 15 done

// const findMaxConsecutiveOnes = (nums) => {
//     let maxCount = 0;
//     let currentCount = 0;
//     for (const num of nums) {
//         if (num===1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };
// console.log(findMaxConsecutiveOnes([1,1,1,0,0,1,1]));

// const canConstruct = (ransomNote, magazine) => {
//   let charCount = new Map();
//   for (const char of magazine) {
//       charCount.set(char, (charCount.get(char)||0)+1);
//   }
//   for (const char of ransomNote) {
//       if (!charCount.has(char) || charCount.get(char)===0) {
//           return false;
//       }
//       charCount.set(char, charCount.get(char)-1);
//   }
//   return true;
// }
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aba"));

// const middleList = (head) => {
//     let slow = head;
//     let fast = head;
//     while(fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// };

// let numberSteps = (num) => {
//     let steps = 0;
//     while(num>0) {
//         num = num%2===0 ? num/2 : num-1;
//         steps++;
//     }
//     return steps;
// }
// console.log(numberSteps(123));

// let fizzBuzz = (n) =>
//   Array.from({length:n}, (_, i) => {
//       let x = i + 1;
//       return x%3===0 && x%5===0 ? "FizzBuzz":
//       x%3===0 ? "Fizz":
//       x%5===0 ? "Buzz":
//       String(x);
//   })
//   console.log(fizzBuzz(15));

// let maxWealth = (accounts) =>
//   Math.max(...accounts.map(customer=>customer.reduce((sum, bank) => sum+=bank, 0)));
//   console.log(maxWealth([[4,5],[5,6],[6,4]]));

// let runningSum = (nums) => {
  //     let sum = 0;
  //     return nums.map(num=>sum+=num);
  // };
  // console.log(runningSum([1,2,3,4]));

// let addDigits = (num) => {
//     let sum = 0;
//     // root digit formula
//     return 1+(num-1)%9;
// };
// console.log(addDigits(81));

// let createHelloWorld = () => () => "Hello World";
// let word= createHelloWorld();
// console.log(word());

// let createCounter = (n) => () => n++;
// let counter = createCounter(90);
// console.log(counter());
// console.log(counter());
// console.log(counter());

// ======================================================================

// const middleNode = (head) => {
//   let slow = head;
//   let fast = head;
//   while(fast&&fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//   }
//   return slow;
// };

// const createHelloWorld = () => () => "Hello World";
// let word = createHelloWorld();
// console.log(word()); 

// const canConstruct = (ransomNote, magazine) => {
  //     const charCount = new Map();
  //     for (const char of magazine) {
  //         charCount.set(char, (charCount.get(char)||0)+1);
  //     }
  //     for (const char of ransomNote) {
  //         if (!charCount.has(char) || charCount.get(char)===0) {
  //             return false;
  //         }
  //         charCount.set(char, charCount.get(char)-1);
  //     }
  //     return true;
  // };
  
  // console.log(canConstruct("aa","ab"));
  // console.log(canConstruct("aa","aba"));

  // const runningSum = (nums) => {
    //     let sum = 0;
    //     return nums.map(num=>sum+=num);
    // };
    // console.log(runningSum([1,2,3,4]));

// const numberSteps = (num) => {
//     let steps = 0;
//     while (num>0) {
//         num = num%2===0 ? num/2 : num-1;
//         steps++;
//     }
//     return steps;
// };

// console.log(numberSteps(123));

// ================================================

// 977. Squares of Sorted Array
// const sortedSquares = (nums) => {
//   const squares = nums.map(num=>num**2);
//   const sorted = squares.sort((a,b)=>a-b);
//   return sorted;
// };

// const sortedSquares = (nums) => {
//   return nums.map(num=>num**2).sort((a,b)=>a-b);
// };

// console.log(sortedSquares([-2,4,1,3,2]));

// ===============================================================



// =============================================

// 977. Squares of Sorted Array
// const sortedSquares = (nums) => {
//   return nums.map(num=>num*num).sort((a,b)=>a-b);
// };
// console.log(sortedSquares([-2,1,3,4,2,-1]));

// const findNumbers = (nums) => {
//   return nums.map(num=>Math.floor(Math.log10(num))+1).filter(len=>len%2===0).length;
// };
// console.log(findNumbers([12,345,2,6,7896]));

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (const num of nums) {
//       if (num===1) {
//           currentCount++;
//           maxCount = Math.max(maxCount, currentCount);
//       } else {
//           currentCount = 0;
//       }
//   }
//   return maxCount;
// };
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   // Loop klasik lebih cepat daripada for...of (kurang overhead iterator)
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       currentCount++;
//       // Hindari Math.max, pakai comparison langsung
//       if (currentCount > maxCount) {
//         maxCount = currentCount;
//       }
//     } else {
//       currentCount = 0;
//     }
//   }
//   return maxCount;
// };
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

// const canConstruct = (ransomNote, magazine) => {
//   let charCount = new Map();
//   for (const char of magazine) {
//       charCount.set(char, (charCount.get(char) || 0)+1);
//   }
//   for (const char of ransomNote) {
//       if (!charCount.has(char) || charCount.get(char)===0) {
//           return false;
//       };
//       charCount.set(char, charCount.get(char)-1);
//   }
//   return true;
// };
// console.log(canConstruct("aa","ab"));
// console.log(canConstruct("aa","aba"));

// const middleNode = (head) => {
//   let slow = head;
//   let fast = head;
//   while (fast&&fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//   };
//   return slow;
// };

// const numberOfSteps = (num) => {
//   let steps = 0;
//   while (num>0) {
//       num = num % 2 === 0 ? num/2 : num-1;
//       steps++;
//   }
//   return steps;
// };
// console.log(numberOfSteps(123));

// const fizzBuzz = (n) => 
//   Array.from({length: n}, (_, i) => {
//       let x = i + 1;
//       return x%3===0 && x%5===0 ? "FizzBuzz":
//       x%3===0 ? "Fizz":
//       x%5===0 ? "Buzz":
//       String(x);
//   });
// console.log(fizzBuzz(15));

// const maximumWealth = (accounts) =>
//   Math.max(...accounts.map(customer=>customer.reduce((sum,bank)=>sum+=bank)));
// console.log(maximumWealth([[1,5],[7,3],[3,5]]));

// const runningSum = (nums) => {
//   let sum = 0;
//   return nums.map(num=>sum+=num);
// };
// console.log(runningSum([3,1,2,10,1]));


/**
 * LeetCode #1089 - Duplicate Zeros
 * Idiomatic ES6 solution: readable, maintainable, and performant
 * Time Complexity: O(n), Space Complexity: O(1) (in-place)
 */
// const duplicateZeros = (arr) => {          // Deklarasi fungsi dengan parameter array input
//   const n = arr.length;                    // Simpan panjang asli array agar tidak berubah
//   const result = [];                       // Buat array sementara untuk menampung hasil transformasi

//   for (let i = 0; i < n; i++) {            // Loop dari indeks 0 sampai n-1
//     // salin elemen asli jika masih muat
//     if (result.length < n) result.push(arr[i]);   // Tambahkan elemen ke result jika belum penuh
//     // duplikasi nol jika masih muat
//     if (arr[i] === 0 && result.length < n) {      // Jika elemen adalah 0 dan masih ada ruang
//       result.push(0);                             // Tambahkan satu nol ekstra (duplikasi)
//     }
//   }

//   // salin balik ke array asli
//   for (let i = 0; i < n; i++) {            // Loop lagi dari 0 sampai n-1
//     arr[i] = result[i];                    // Copy elemen dari result ke array asli (in-place overwrite)
//   }
// };

// // Contoh penggunaan
// let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// console.log("Sebelum:", [...arr]); // tampilkan array sebelum diproses
// duplicateZeros(arr); // panggil fungsi
// console.log("Sesudah:", arr); // tampilkan array setelah diproses

// =============================================

// const duplicateZeros = (arr) => {          
//   const n = arr.length;                    
//   const result = [];                      
//   for (let i = 0; i < n; i++) {           
//     if (result.length < n) result.push(arr[i]);  
//     if (arr[i] === 0 && result.length < n) {      
//       result.push(0);                            
//     }
//   }
//   for (let i = 0; i < n; i++) {           
//     arr[i] = result[i];                   
//   }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
    
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i] === 0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i] === 0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i]===0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i]===0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i]===0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i] === 0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i]
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i]===0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i]===0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i] === 0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i]
//     }
// };

// const duplicateZeros = (arr) => {
//     const n = arr.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         if (result.length < n) result.push(arr[i]);
//         if (arr[i]===0 && result.length < n) {
//             result.push(0);
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         arr[i] = result[i];
//     }
// }

// // Contoh penggunaan
// let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// console.log([...arr]); // tampilkan array sebelum diproses
// duplicateZeros(arr); // panggil fungsi
// console.log(arr); // tampilkan array setelah diproses
// ========================================================

/**
 * Merge Sorted Array (LeetCode #88)
 * nums1: array utama dengan kapasitas cukup (panjang m+n)
 * m: jumlah elemen valid di nums1
 * nums2: array kedua yang akan digabung
 * n: jumlah elemen valid di nums2
 */

// versi es6 readability
// const merge = (nums1, m, nums2, n) => {
//   // pointer untuk akhir elemen valid di nums1
//   let i = m - 1;
//   // pointer untuk akhir elemen valid di nums2
//   let j = n - 1;
//   // pointer untuk posisi akhir array gabungan
//   let k = m + n - 1;

//   // selama masih ada elemen di nums2
//   while (j >= 0) {
//     // jika nums1 masih ada elemen dan lebih besar dari nums2
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i]; // taruh elemen nums1 di posisi akhir
//       i--;                 // geser pointer nums1 ke kiri
//     } else {
//       nums1[k] = nums2[j]; // taruh elemen nums2 di posisi akhir
//       j--;                 // geser pointer nums2 ke kiri
//     }
//     k--; // geser pointer gabungan ke kiri
//   }
// };

// versi es6 idiomatic ternary
// const merge = (nums1, m, nums2, n) => {
//   // pointer akhir elemen valid di nums1
//   let i = m - 1, 
//       // pointer akhir elemen valid di nums2
//       j = n - 1, 
//       // pointer akhir gabungan
//       k = m + n - 1;

//   // selama masih ada elemen di nums2
//   while (j >= 0) {
//     // pilih elemen lebih besar antara nums1[i] dan nums2[j]
//     nums1[k--] = (i >= 0 && nums1[i] > nums2[j]) 
//       ? nums1[i--]   // jika nums1[i] lebih besar → taruh di nums1[k], lalu i--
//       : nums2[j--];  // jika tidak → taruh nums2[j] di nums1[k], lalu j--
//   }
// };
// =====================================================

// const merge = (nums1, m, nums2, n) => {
//     let i = m-1;
//     let j = n-1;
//     let k = m+n-1;
//     while(j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while (j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while(j>=0) {
//         nums1[k--] = (i >= 0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while (j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while(j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while(j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while(j>=0) {
//         nums1[k--] = (i>=0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while (j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while (j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// const merge = (nums1, m, nums2, n) => {
//     let i=m-1, j=n-1, k=m+n-1;
//     while(j>=0) {
//         nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//     }
// };

// ====================================

// LeetCode 27: Remove Element
// Tujuan: hapus semua kemunculan `val` dari `nums` secara in-place,
// lalu kembalikan jumlah elemen yang bukan `val` (k).

// const removeElement = (nums, val) => {
//   let k = 0;                 // pointer tulis: posisi untuk menaruh elemen yang bukan `val`

//   // loop satu kali melewati seluruh array (O(n) time, O(1) space)
//   for (let i = 0; i < nums.length; i++) {
//     const curr = nums[i];    // ambil elemen saat ini untuk keterbacaan
//     if (curr !== val) {      // jika elemen bukan `val`, kita pertahankan
//       nums[k] = curr;        // tulis elemen ke posisi `k` (overwrite in-place)
//       k++;                   // geser pointer tulis ke depan
//     }                        // jika elemen adalah `val`, kita abaikan (tidak menulis, tidak menaikkan k)
//   }

//   return k;                  // k = jumlah elemen yang bukan `val`; first k elements valid
// };

// LeetCode #27: Remove Element
// Time: O(n), Space: O(1)

// const removeElement = (nums, val) => {
//   let k = 0; // pointer untuk posisi tulis
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k++] = nums[i]; // overwrite hanya jika bukan target
//     }
//   }
//   return k;
// };


// // Contoh penggunaan:
// let arr = [3, 2, 2, 3];
// let len = removeElement(arr, 3);
// console.log(len, arr.slice(0, len)); // 2 [2, 2]

// arr = [0, 1, 2, 2, 3, 0, 4, 2];
// len = removeElement(arr, 2);
// console.log(len, arr.slice(0, len)); // 5 [0, 1, 3, 0, 4]

// ===============

// LeetCode #26: Remove Duplicates from Sorted Array
// Time: O(n), Space: O(1)

const removeDuplicates = (nums) => {
  if (!nums.length) return 0;

  let k = 1; // pointer untuk posisi unik berikutnya
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k++] = nums[i]; // overwrite dengan nilai unik
    }
  }
  return k;
};

// contoh penggunaan
const nums = [0,0,1,1,1,2,2,3,3,4];
const k = removeDuplicates(nums);

console.log(k);        // 5
console.log(nums.slice(0, k)); // [0,1,2,3,4]

// const removeDuplicates = (nums) => {
//     if (!nums.length) return 0;
//     let k = 1;
//     for (let i=1; i<nums.length; i++) {
//         if(nums[i] !== nums[i-1]) {
//             nums[k++] = nums[i];
//         }
//     }
//     return k;
// };

// const removeDuplicates = (nums) => {
//     if(!nums.length) return 0;
//     let k=1;
//     for (let i=1; i<nums.length; i++) {
//         if (nums[i] !== nums[i-1]) {
//             nums[k++] = nums[i];
//         }
//     }
//     return k;
// };

// const removeDuplicates = (nums) => {
//     if(!nums.length) return 0;
//     let k=1;
//     for(let i=1; i<nums.length; i++) {
//         if(nums[i]!==nums[i-1]) {
//             nums[k++] = nums[i];
//         }
//     }
//     return k;
// };

// const removeDuplicates = (nums) => {
//     if(!nums.length) return 0;
//     let k=1;
//     for(let i=1; i<nums.length; i++) {
//         if(nums[i]!==nums[i-1]) {
//             nums[k++] = nums[i];
//         }
//     }
//     return k;
// };

// const removeDuplicates = (nums) => {
//     if(!nums.length) return 0;
//     let k=1;
//     for(let i=1; i<nums.length; i++) {
//         if(nums[i]!==nums[i-1]) {
//             nums[k++] = nums[i];
//         }
//     }
//     return k;
// };

// const removeDuplicates = (nums) => {
//     if(!nums.length) return 0;
//     let k=1;
//     for(let i=1; i<nums.length; i++) {
//         if(nums[i]!==nums[i-1]) {
//             nums[k++] = nums[i];
//         }
//     }
//     return k;
// };

// ============================

// const removeDuplicates = (nums) => {
//   if (!nums.length) return 0;
//   let k = 1;
//   for (let i=1; i<nums.length; i++) {
//       if (nums[i] !== nums[i-1]) {
//           nums[k++] = nums[i];
//       }
//   }
//   return k;
// };

// const removeElement = (nums, val) => {
//   let k = 0;
//   for (let i=0; i<nums.length; i++) {
//       if (nums[i] !== val) {
//           nums[k++] = nums[i];
//       }
//   }
//   return k;
// };

// const merge = (nums1, m, nums2, n) => {
//   let i = m-1;
//   let j = n-1;
//   let k = m+n-1;
//   while (j>=0) {
//       nums1[k--] = (i>=0 && nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
//   }
// };

// const sortedSquares = (nums) => {
//   return nums.map(num=>num**2).sort((a,b)=>a-b);
// };

// const findNumbers = (nums) => {
//   return nums.map(num=>String(num).length).filter(len=>len%2===0).length;
// };

// const duplicateZeros = (arr) => {
//   const n = arr.length;
//   const result = [];
//   for (let i=0; i<n; i++) {
//       if (result.length<n) result.push(arr[i]);
//       if (arr[i]===0 && result.length<n) {
//           result.push(0);
//       }
//   }
//   for (let i=0; i<n; i++) {
//       arr[i] = result[i];   
//   }
// };

// const findMaxConsecutiveOnes = (nums) => {
//   let maxCount = 0;
//   let currentCount = 0;
//   for (let i=0; i<nums.length; i++) {
//       currentCount = (nums[i]===1) ? currentCount+1 : 0; 
//       maxCount = Math.max(maxCount, currentCount);
//   }
//   return maxCount;
// };

// const runningSum = (nums) => {
//   let sum = 0;
//   return nums.map(num=>sum+=num);
// };

// const addDigits = (num) => {
//   if (num===0) return 0;
//   // root digit formula
//   return 1+(num-1)%9;
// };

// const maximumWealth = (accounts) => 
//   Math.max(...accounts.map(customer=>customer.reduce((sum, bank)=>sum+=bank)));

// const fizzBuzz = (n) =>
//   Array.from({length: n}, (_, i) => {
//       let x = i+1;
//       return x%3===0 && x%5===0 ? "FizzBuzz":
//       x%3===0 ? "Fizz":
//       x%5===0 ? "Buzz":
//       String(x);
//   });

// const numberOfSteps = (num) => {
//   let steps = 0;
//   while (num>0) {
//       num = num%2===0 ? num/2 : num-1;
//       steps++;
//   }
//   return steps;
// };

// const middleNode = (head) => {
//   let slow = head;
//   let fast = head;
//   while(fast&&fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//   }
//   return slow;
// };

// const canConstruct = (ransomNote, magazine) => {
//   let charCount = new Map();
//   for (const char of magazine) {
//       charCount.set(char, (charCount.get(char)||0)+1);
//   };
//   for (const char of ransomNote) {
//       if (!charCount.has(char) || charCount.get(char)===0) {
//           return false;
//       }
//       charCount.set(char, charCount.get(char)-1);
//   };
//   return true;
// };

/**
 * LeetCode 1346: Check If N and Its Double Exist
 * Versi looping biasa (nested loop).
 */

// const checkIfExist = (arr) => {
//   // Loop pertama: ambil setiap elemen sebagai kandidat n
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i]; // elemen saat ini

//     // Loop kedua: bandingkan dengan semua elemen lain
//     for (let j = 0; j < arr.length; j++) {
//       // Pastikan tidak membandingkan elemen yang sama (i !== j)
//       if (i !== j && arr[j] === num * 2) {
//         return true; // Jika ketemu pasangan valid, langsung return true
//       }
//     }
//   }

//   // Jika selesai looping tanpa menemukan pasangan, return false
//   return false;
// };

// console.log(checkIfExist([10, 2, 5, 3])); // true (10 = 2 * 5)
// console.log(checkIfExist([7, 1, 14, 11])); // true (14 = 2 * 7)
// console.log(checkIfExist([3, 1, 7, 11])); // false

const checkIfExist = (arr) => {
  for (let i=0; i<arr.length; i++) {
      let num = arr[i];
      for (let j=0; j<arr.length; j++) {
          if (i !== j && arr[j] === num*2) {
              return true;
          }
      }
  }
  return false;
};

// ====================================