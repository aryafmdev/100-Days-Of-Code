// function validateForm(event) {
//   event.preventDefault(); // prevent form from submitting

//   let email = document.getElementById('email').value.trim();
//   let password = document.getElementById('password').value.trim();
//   let feedback = document.getElementById('feedback');

//   if (email === '') {
//     feedback.textContent = 'Email is required';
//   } else if (password.length < 6) {
//     feedback.textContent = 'Password must be at least 6 characters';
//   } else {
//     feedback.textContent = 'Login successfull!';
//   }
// }

// let createCounter = function (init) {
//   let current = init;

//   function increment() {
//     current += 1;
//     return current;
//   }
//   function decrement() {
//     current -= 1;
//     return current;
//   }
//   function reset() {
//     current = init;
//     return current;
//   }

//   return {
//     increment,
//     decrement,
//     reset,
//   };
// };

// // mini langkah 1
// const arr = [1, 2, 3];
// const fn = (val, idx) => val + idx;

// const arr = [1, 2, 3];
// const fn = (val, idx) => val * 2 + idx;

// const arr = [1, 2, 3];
// const fn = (val, idx) => idx;

// // mini langkah 2
// const map = (arr, fn) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {}
// };

// const map = (arr, fn) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//   }
//   return result;
// };

// let age = 20;
// let status;

// if (age >= 18) {
//   status = "Dewasa";
// } else {
//   status = "Anak-anak";
// }

// let age = 20;
// let status = age >= 18 ? "Dewasa" : "Bocil";

// let age = 20;
// let status = age < 18 ? "Bocil" : "Dewasa";

// // 1
// let isOnline = true;
// let status = isOnline === true ? "Online" : "Offline";
// // 2
// let score = 75;
// let result = score >= 80 ? "Lulus" : "Remedial";
// // 3
// let userRole = "admin";
// let access = userRole === "admin" ? "Full Access" : "Limited Access";
// // 4
// let age = 17;
// let permission = age >= 18 ? "Boleh masuk" : "Dilarang masuk";
// // 5
// let isDarkMode = false;
// let theme = isDarkMode === true ? "Dark" : "Light";

// let isOnline = false;
// let status = isOnline === true ? "Online" : "Offline";

// let day = "Monday";

// switch (day) {
//   case ("Monday"): {
//     return "Senin produktif!";
//   };
//   case ("Saturday" || "Sunday"): {
//     return "Akhir pekan santai";
//   };
//   default: {
//     return "Hari biasa";
//   };
// }

// Kuis Latihan Menulis Kode switch Statement
// 🔁 Soal 1: Hari dalam Seminggu
// Buat kode switch yang menerima variabel day = "Monday" dan mencetak:

// "Senin produktif!" jika day adalah "Monday"

// "Akhir pekan santai" jika day adalah "Saturday" atau "Sunday"

// "Hari biasa" untuk hari lainnya

// jawaban soal nomor 1

// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log ("Senin produktif!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log ("Akhir pekan santai");
//     break;
//   default:
//     console.log ("Hari biasa");
// }

// 🔁 Soal 2: Skor Nilai
// Buat kode switch untuk variabel grade = "B" yang mencetak:

// "Sangat baik" jika "A"

// "Baik" jika "B"

// "Cukup" jika "C"

// "Nilai tidak dikenal" untuk lainnya

// jawaban soal nomor 2

// let grade = "B";

// switch (grade) {
//   case "A":
//     console.log ("Sangat baik");
//     break;
//   case "B":
//     console.log ("Baik");
//     break;
//   case "C":
//     console.log ("Cukup");
//     break;
//   default:
//     console.log ("Nilai tidak dikenal");
// }

// 🔁 Soal 3: Mode Tampilan
// Buat kode switch untuk variabel mode = "dark" yang mencetak:

// "Mode gelap aktif" jika "dark"

// "Mode terang aktif" jika "light"

// "Mode tidak dikenal" untuk lainnya

// jawaban soal nomor 3

// let mode = "dark"

// switch (mode) {
//   case "dark":
//     console.log ("Mode gelap aktif");
//     break;
//   case "light":
//     console.log ("Mode terang aktif");
//     break;
//   default :
//     console.log ("Mode tidak dikenal");
// }

// 🔁 Soal 4: Gabungan Case
// Buat kode switch untuk variabel fruit = "Papaya" yang mencetak:

// "Buah tropis" jika "Mango" atau "Papaya"

// "Buah lokal" jika "Apple"

// "Buah tidak dikenal" untuk lainnya

// jawaban soal nomor 4

// let fruit = "Papaya";

// switch (fruit) {
//   case "Mango":
//   case "Papaya":
//     console.log ("Buah tropis");
//     break;
//   case "Apple":
//     console.log ("Buah lokal");
//     break;
//   default :
//     console.log ("Buah tidak dikenal");
// }

// 🔁 Soal 5: Tanpa Break
// Buat kode switch untuk level = 2 yang mencetak:

// "Level 1" jika 1

// "Level 2" jika 2

// "Level 3" jika 3

// Tapi jangan pakai break — biarkan semua case setelah cocok ikut tercetak (fall-through).

// jawaban soal nomor 5

// let level = 2; // hati2 ini tipe data  dari value nya number

// switch (level) {
//   // makanya di dalam value dari case ini harus tertulis dalam tipe data number juga
//   case 1:
//     console.log ("Level 1");
//   case 2:
//     console.log ("Level 2");
//   case 3:
//     console.log ("Level 3");
// }

// penerapan switch dalam kalkulator sederhana
// pertama buat variabel contoh input nya
// a itu angka ke 1 yang di input oleh user
// b itu angka ke 2 yang di input oleh user
// ini versi 1 menampilkan langsung hasil dengan console.log
// let a = 10;
// let b = 5;
// let operator = "+";

// switch (operator) {
//   case "+" :
//     console.log (a + b);
//     break;
//   case "-" :
//     console.log (a - b);
//     break;
//   case "*" :
//     console.log (a * b);
//     break;
//   case "/" :
//     if (b !== 0) {
//     console.log (a / b);
//   } else {
//       console.log ("Tidak bisa dibagi dengan 0");
//   }
//     break;
//   default :
//   console.log ("Operator invalid")
// }

// ini versi 2 switch yang dibungkus dengan function

// let a = 10;
// let b = 5;
// let operator = "+";

// function calculate(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return (a + b);
//     case "-":
//       return (a - b);
//     case "*":
//       return (a * b);
//     case "/":
//       return (b !== 0 ? (a / b) : "tidak bisa dibagi dengan 0");
//     default:
//       return ("operator invalid");
//   }
// }

let a = Number(prompt('masukkan angka pertama'));
let b = Number(prompt('masukkan angka kedua'));
let operator = prompt('masukkan operator (+, -, *, /)');

function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'tidak bisa dibagi dengan 0';
    default:
      return 'operator invalid';
  }
}

let result = calculator(a, b, operator);
console.log('Hasilnya adalah : ', result);
