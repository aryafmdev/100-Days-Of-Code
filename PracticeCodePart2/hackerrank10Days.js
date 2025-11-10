// 10 Days Javascript

// 01 hello world
// console.log(parameterVariable);

// 02 data types
// console.log(firstInteger + Number(secondInteger));
// console.log(firstDecimal + Number(secondDecimal));
// console.log(firstString + secondString);

// 03 arithmetic operators
// const getArea = (length, width) => length * width;
// const getPerimeter = ( length, width) => 2 * (length + width);

// 04 functions - FACTORIAL
// const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

// 05 let & const - tanda + CARA CEPAT MERUBAH STRING KE NUMBER
// let r = +readline();
// const PI = Math.PI; // function bawaan JS utk PI
// let area = PI*(r*r);
// let perimeter = 2*PI*r;
// console.log(area);
// console.log(perimeter);

// 06 conditional statements IF-ELSE
// MULAI DARI KONDISI TERKECIL DULU
// const getGrade = score =>
//   score >= 0 && score <= 5 ? "F" :
//   score <= 10 ? "E" :
//   score <= 15 ? "D" :
//   score <= 20 ? "C" :
//   score <= 25 ? "B" :
//   score <= 30 ? "A" : "-";\

// 07 conditional statements SWITCH
// const getLetter = s =>
// 'aiueo'.includes(s[0]) ? 'A' :
// 'bcdfg'.includes(s[0]) ? 'B' :
// 'hjklm'.includes(s[0]) ? 'C' : 'D';

// 08 loops - INCLUDES() SPLIT() FILTER() FOREACH()
// const vowelsAndConsonants = s => {
//   const isVowel = v => 'aiueo'.includes(v); // alat penyaring vokal
//   const isConsonant = c => !isVowel(c); // alat penyaring konsonan
//   const chars = s.split(''); // ubah string jadi array huruf

//   chars.filter(isVowel).forEach(v => console.log(v)); // cetak vokal
//   chars.filter(isConsonant).forEach(c => console.log(c)); // cetak konsonan
// };

// 09 arrays - [...new set(arr)] & sort descending (besar ke kecil)
// const getSecondLargest = (nums) => [...new Set(nums)].sort((a, b) => b - a)[1];

// 10 try, catch, & finally - TRY CATCH FINALLY
// PERLU DIULANG !!!
const reverseString = (s) => {
  try {
    // Coba balik string
    s = s.split('').reverse().join('');
  } catch (err) {
    // Cetak pesan error
    console.log(err.message);
  } finally {
    // Cetak hasil akhir (baik berhasil atau gagal)
    console.log(s);
  }
};

////////////////////////////////////////////////////////////////////////
// 11 throw IF () RETURN & IF () THROW
const isPositive = (a) => {
  if (a > 0) return 'YES';
  if (a === 0) throw new Error('Zero Error');
  throw new Error('Negative Error');
};
// versi lain
const validateEmail = (email) => {
  try {
    if (!email.includes('@')) {
      throw new Error('Email tidak valid');
    }
    console.log('Email valid:', email);
  } catch (err) {
    console.log('Terjadi error:', err.message);
  }
};

// 12 create a rectangle object
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  };
}

// 13 count objects - FILTER() - REDUCE()
// common version
function getCount(objects) {
  return objects.filter((obj) => obj.x === obj.y).length;
}
// idiomatic version - reduce()
const getCount = (objects) =>
  objects.reduce((count, { x, y }) => count + (x === y), 0);
// idiomatic version - filter()
const getCount = (objects) =>
  objects.filter((object) => object.x === object.y).length;

// 14 classes - CONSTRUCTOR
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}

// 15 inheritance
// tambah method area ke prototype
Rectangle.prototype.area = function () {
  return this.w * this.h;
};
// buat class yang inherit dari rectangle
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// 16 template literals
function sides(literals, ...expressions) {
  const [area, perimeter] = expressions;
  const s = perimeter / 2;
  const root = Math.sqrt(s * s - 4 * area);
  const side1 = (s + root) / 2;
  const side2 = (s - root) / 2;
  return [side1, side2].sort((a, b) => a - b);
}
// idiomatic version ES6+
const sides = (literal, area, perimeter) => {
  const s = perimeter / 2;
  const root = Math.sqrt(s ** 2 - 4 * area);
  return [(s - root) / 2, (s + root) / 2].sort((a, b) => a - b);
};

// 17 arrow functions
// idiomatic version ES6+
const modifyArray = (nums) => nums.map((n) => (n % 2 === 0 ? n * 2 : n * 3));

// 18 bitwise operators BELUM DIPELAJARI
// idiomatic top tier version
function getMaxLessThanK(n, k) {
  return ((k - 1) | k) <= n ? k - 1 : k - 2;
}

// 19 javascript dates BELUM DIPELAJARI
// top tier idiomatic version
const getDayName = dateString =>
  new Date(dateString).toLocaleDateString('en-US', { weekday: 'long' });

// 20 regular expressions I BELUM DIPELAJARI
// top tier idiomatic version
const regexVar = () => /^([aeiou]).*?\1$/i;
// common version
function regexVar() {
  return /^([aeiou]).*?\1$/i;
}

// 21 regular expressions II BELUM DIPELAJARI
function regexVar() {
  return /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;
}
// top tier idiomatic version
const regexVar = () => /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;

// 22 regular expressions III BELUM DIPELAJARI
function regexVar() {
  return /\d+/g;
}
// top tier idiomatic version
const regexVar = () => /\d+/g;

// 23 create a button PELAJARI LAGI
// <!-- Enter your HTML code here -->
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Button</title>
//         <link rel="stylesheet" href="css/button.css" type="text/css">
//     </head>
//     <body>
//         <script src="js/button.js" type="text/javascript"></script>
//     </body>
// </html>
// CSS CODE
// #btn {
//   width: 96px;
//   height: 48px;
//   font-size: 24px;
// }
// JS CODE
// const button = document.createElement('button');
// button.id = 'btn';
// button.innerHTML = '0';

// button.addEventListener('click', () => {
//   button.innerHTML = String(Number(button.innerHTML) + 1);
// });

// document.body.appendChild(button);

// 24 buttons container PELAJARI LAGI
// <!-- Enter your HTML code here -->
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Buttons Grid</title>
//         <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
//     </head>
//     <body>
//         <script src="js/buttonsGrid.js" type="text/javascript"></script>
//     </body>
// </html>
// CSS CODE
// #btns {
//   width: 360px;
// }

// #btns button {
//   width: 120px;
//   height: 48px;
//   font-size: 24px;
// }
// JS CODE
// const container = document.createElement('div');
// container.id = 'btns';
// document.body.appendChild(container);

// // Create 9 buttons with IDs btn1 to btn9
// for (let i = 1; i <= 9; i++) {
//   const btn = document.createElement('button');
//   btn.id = `btn${i}`;
//   btn.innerHTML = String(i);
//   container.appendChild(btn);
// }

// // Rotation logic on btn5 click
// document.getElementById('btn5').addEventListener('click', () => {
//   const ids = ['btn1', 'btn2', 'btn3', 'btn6', 'btn9', 'btn8', 'btn7', 'btn4'];
//   const values = ids.map(id => document.getElementById(id).innerHTML);
//   values.unshift(values.pop()); // Rotate clockwise
//   ids.forEach((id, i) => {
//     document.getElementById(id).innerHTML = values[i];
//   });
// });

// 25 binary calculator PELAJARI LAGI
// <!-- Enter your HTML code here -->
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Binary Calculator</title>
//         <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
//     </head>
//     <body>
//         <script src="js/binaryCalculator.js" type="text/javascript"></script>
//     </body>
// </html>
// CSS CODE
// body {
//   width: 33%;
// }

// #res {
//   background-color: lightgray;
//   border: solid;
//   height: 48px;
//   font-size: 20px;
// }

// #btns button {
//   width: 25%;
//   height: 36px;
//   font-size: 18px;
//   margin: 0px;
//   float: left;
// }

// #btn0, #btn1 {
//   background-color: lightgreen;
//   color: brown;
// }

// #btnClr, #btnEql {
//   background-color: darkgreen;
//   color: white;
// }

// #btnSum, #btnSub, #btnMul, #btnDiv {
//   background-color: black;
//   color: red;
// }
// JS CODE
// const res = document.createElement('div');
// res.id = 'res';
// document.body.appendChild(res);

// const btns = document.createElement('div');
// btns.id = 'btns';
// document.body.appendChild(btns);

// const buttons = [
//   { id: 'btn0', label: '0' },
//   { id: 'btn1', label: '1' },
//   { id: 'btnClr', label: 'C' },
//   { id: 'btnEql', label: '=' },
//   { id: 'btnSum', label: '+' },
//   { id: 'btnSub', label: '-' },
//   { id: 'btnMul', label: '*' },
//   { id: 'btnDiv', label: '/' }
// ];

// buttons.forEach(({ id, label }) => {
//   const btn = document.createElement('button');
//   btn.id = id;
//   btn.innerHTML = label;
//   btns.appendChild(btn);
// });

// // Event bindings
// document.getElementById('btn0').onclick = () => res.innerHTML += '0';
// document.getElementById('btn1').onclick = () => res.innerHTML += '1';
// document.getElementById('btnSum').onclick = () => res.innerHTML += '+';
// document.getElementById('btnSub').onclick = () => res.innerHTML += '-';
// document.getElementById('btnMul').onclick = () => res.innerHTML += '*';
// document.getElementById('btnDiv').onclick = () => res.innerHTML += '/';

// document.getElementById('btnClr').onclick = () => res.innerHTML = '';

// document.getElementById('btnEql').onclick = () => {
//   const expr = res.innerHTML;
//   const [a, op, b] = expr.split(/([+\-*/])/);
//   const x = parseInt(a, 2);
//   const y = parseInt(b, 2);
//   let result;

//   switch (op) {
//     case '+': result = x + y; break;
//     case '-': result = x - y; break;
//     case '*': result = x * y; break;
//     case '/': result = Math.floor(x / y); break;
//   }

//   res.innerHTML = result.toString(2);
// };
  
