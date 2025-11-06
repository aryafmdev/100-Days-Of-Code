// Daftar Soal & Jawaban Codewars 8 Kyu
// setup filter : popularity, javascript, approved, kata I have not completed, 8 kyu

// 001 multiply
// perbaiki sintaks kode doang

// 002 opposite number
// function opposite(number) {
//   return -number;
// }
// versi arrow function
// const opposite = number => -number;

// 003 return negative
// function makeNegative(num) {
//   return -Math.abs(num);
// }
// versi arrow function
// const makeNegative = num => -Math.abs(num);

// 004 convert a number to string
// function numberToString(num) {
//   return `${num}`;
// }
// versi arrow function
// const numberToString = num => `${num}`;

// 005 convert a string to number
// const stringToNumber = function(str) {
//   return +str;
// }

// 006 basic mathematical operations
// versi basic
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//       case '+':
//           return value1 + value2;
//       case '-':
//           return value1 - value2;
//       case '*':
//           return value1 * value2;
//       case '/':
//           return value1 / value2;
//       default:
//           return "Invalid Operator";
//   }
// }
//  versi ringkas & idiomatic
// const basicOp = (op, a, b) => {
//   const ops = {
//     "+": a + b,
//     "-": a - b,
//     "*": a * b,
//     "/": b !== 0 ? a / b : "tidak bisa dibagi dengan 0"
//   };
//   return ops[op] ?? "Operator Invalid";
// };

// 007 grasshopper - summation (deret aritmatika)
// versi biasa
// let summation = function (num) {
//   return num * (num + 1) / 2;
// }
// versi arrow function ringkas & idiomatik
// const summation = n => n * (n + 1) / 2;

// 008 function 1
// versi biasa
// function greet() {
//   return "hello world!";
// }
// versi ringkas & idiomatik arrow function
// let greet = x => "hello world!";

// 009 multiply the number
// versi biasa
// function multiply(number){
//   return number * (5**String(Math.abs(number)).length);
// }
//versi arrow function, ringkas & idiomatic
// const multiply = number => number * (5** String(Math.abs(number)).length);

// 010 convert boolean values to strings yes or no
// versi ternary
// function boolToWord(bool) {
//   return bool ? 'Yes' : 'No';
// }
// versi arrow function, ringkas & idiomatic
// const boolToWord = (bool) => (bool ? 'Yes' : 'No');

////////////////////////////////////////////////

// // 011 opposites attract
// // versi biasa
// function lovefunc(flower1, flower2) {
//   return (flower1 % 2 === 0) !== (flower2 % 2 === 0) ? true : false;
// }
// // versi idiomatic & ringkas
// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }
// // versi lain ringkas menggunakan logika terbalik dari soal
// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1
// }
// // versi arrow function
// const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;
// //versi arrow function refactoring reverse logic
// const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

// // 012 reverse strings
// // versi biasa
// function solution(str) {
//   return str.split("").reverse().join("");
// }
// // versi arrow function, ringkas idiomatik
// const solution = str => str.split("").reverse().join("");

// // 013 sum of positive
// // versi biasa
// function positiveSum(arr) {
//   return arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);
// }
// // arrow function, idiomatic
// const positiveSum = arr => arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);

// // 014 remove first and last character // BUANG HURUF AWAL & AKHIR
// // versi biasa
// function removeChar(str) {
//   return str.slice(1, -1);
// }
// // versi idiomatic
// const removeChar = str => str.slice(1, -1);

// // 015 string repeat
// // versi biasa
// function repeatStr(n, s) {
//   return n > 0 ? s.repeat(n) : '';
// }
// // idiomatic version
// const repeatStr = (n, s) => (n > 0 ? s.repeat(n) : '');

// // 016 count of positives/ sum of negatives
// // common version
// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }
//   let countPositives = 0;
//   let sumNegatives = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       countPositives++;
//     } else if (input[i] < 0) {
//       sumNegatives += input[i];
//     }
//   }
//   return [countPositives, sumNegatives];
// }
// // idiomatic version
// const countPositivesSumNegatives = (input) =>
//   !input || input.length === 0
//     ? []
//     : [
//         input.filter((n) => n > 0).length,
//         input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
//       ];

// // 017 you can't code under pressure #1
// // versi biasa
// function doubleInteger(i) {
//   return i * 2;
// }
// // idiomatic version
// const doubleInteger = i => i * 2;

// // 018 beginner - reduce but grow
// function grow(x) {
//   return x.reduce((a, b) => (a * b), 1);
// }
// // idiomatic version
// const grow = x => x.reduce((a, b) => (a * b), 1);

// // 019 beginner - clock
// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }
// // idiomatic version
// const past = (h, m, s) => ((h*3600)+(m*60)+s)*1000;

// // 020 beginner - school paperwork
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0;
// }
// // idiomatic version
// const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;

// // 021 beginner - cockroach
// function cockroachSpeed(s) {
//   return Math.floor(s * (100000/3600));
// }
// // idiomatic version
// const cockroachSpeed = s => Math.floor(s*(100000/3600));

/////////////////////////////////////////////////////////

// // 022 beginner - sum of numbers
// function getSum(a, b) {
//   return (Math.abs(a-b)+1) * (a+b)/2;
// }
// // idiomatic version
// const getSum = (a, b) => ((Math.abs(a - b) + 1) * (a + b)) / 2;

// // 023 Find Maximum and Minimum Values of a List
// let min = function(list){
//     return Math.min(...list);
// }
// let max = function(list){
//     return Math.max(...list);
// }
// // idiomatic version
// let min = list => Math.min(...list);
// let max = list => Math.max(...list);

// // 024 Sum Arrays
// function sum(numbers) {
//   return numbers.reduce((sum, current) => sum + current, 0);
// }
// // idiomatic version
// const sum = numbers => numbers.reduce((sum, current) => (sum + current), 0);

// // 025 Calculate BMI
// function bmi(weight, height) {
//   const value = weight / (height ** 2);
//   if (value <= 18.5) return "Underweight";
//   else if (value <= 25.0) return "Normal";
//   else if (value <= 30.0) return "Overweight";
//   else return "Obese";
// }
// // idiomatic version
// const bmi = (weight, height) => {
//   const value = weight / (height ** 2);
//   return value <= 18.5 ? "Underweight"
//        : value <= 25.0 ? "Normal"
//        : value <= 30.0 ? "Overweight"
//        : "Obese";
// };

/////////////////////////////////////////////

// // 026 - areYouPlayingBanjo
// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase()=="r" ?
//   " plays" : " does not play") + " banjo";
// }
// // ini cara menampilkannya
// console.log(areYouPlayingBanjo("rendi"));
// console.log(areYouPlayingBanjo("andi"));
// console.log(areYouPlayingBanjo("didi"));
// console.log(areYouPlayingBanjo("riki"));

// // 027 - do something n times
// Number.prototype.times = function (f) {
//   for (let i = 0; i < this; i++) {
//     f(i);
//   }
// };
// // ini cara menampilkannya
// (5).times(i => {
//   console.log(`FAANG I'm Coming ${i}`);
// });

// // 028 - quarter of the year versi 1
// const quarterOf = (month) => {
//   if (month >= 1 && month <= 3) return 1;
//   if (month <= 6) return 2;
//   if (month <= 9) return 3;
//   if (month <= 12) return 4;
//   return null;
// };
// versi yang lebih ringkas dan powerful dengan arrow function, gila simple parah
// const quarterOf = m => Math.ceil(m/3);

// // 029 - check even or odd
// const isEven = n => n % 2 === 0;
// // versi tampilkan output string
// const checkEvenOdd = n => n % 2 === 0 ? "Even" : "Odd";
// // versi function biasa
// function evenOrOdd (number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

/////////////////////////////////////////////////

// // 030 square(n)sum
// function squareSum(numbers) {
//   return numbers.map((n) => n ** 2).reduce((sum, n) => sum + n, 0);
// }
// // idiomatic version
// const squareSum = (numbers) =>
//   numbers.map((n) => n ** 2).reduce((sum, n) => sum + n, 0);

// // 031 find the smallest integer in the array
// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }
// // idiomatic version
// const findSmallestInt = arr => Math.min(...arr);

// // 032 remove string spaces (ada spasi di dalam string kosong split ya)
// function noSpace(x) {
//   return x.split(' ').join('');
// }
// // idiomatic version (ada spasi di dalam string kosong split ya)
// const noSpace = (x) => x.split(' ').join('');

// // 033 counting sheep
// function countSheeps(sheep) {
//   return sheep.filter(Boolean).length;
// }
// // idiomatic version
// const countSheeps = sheep => sheep.filter(Boolean).length;

// // 034 abbreviate 2 word name
// function abbrevName(name){
// return name.split(" ").map(name => name[0]).join(".").toUpperCase();
// }
// // idiomatic version
// const abbrevName = name => name.split(" ").map(name => name[0]).join(".").toUpperCase();

// // 035 keep hydrated
// function litres(time) {
//   return Math.floor(time*0.5);
// }
// // idiomatic version
// const litres = time => Math.floor(time*0.5);

// // 036 century from year
// function century(year) {
//   return Math.ceil(year/100);
// }
// // idiomatic version
// const century = year => Math.ceil(year/100);

////////////////////////////////////////////////////

// // 037 convert number to reversed array of digits
// function digitize(n) {
//   return String(n).split("").reverse().map(Number);
// }
// // idiomatic version
// const digitize = n => String(n).split("").reverse().map(Number);

// // 038 returning strings
// function greet(name){
//   return `Hello, ${name} how are you doing today?`;
// }
// // idiomatic version
// const greet = name => `Hello, ${name} how are you doing today?`;

// // 039 a needle in the haystack
// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }
// // idiomatic version
// const findNeedle = haystack => "found the needle at position " + haystack.indexOf("needle");

// // 040 beginner - lost without a map
// function maps(x){
//   return x.map(n => n*2);
// }
// // idiomatic version
// const maps = x => x.map(n=>n*2);

// // 041 convert a boolean to a string
// function booleanToString(b){
//   return String(b);
// }
// // idiomatic version
// const booleanToString = b => String(b);

// // 042 is n divisible by x & y ?
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }
// // idiomatic version
// const isDivisible = (n,x,y) => n % x === 0 && n % y === 0;

// 043 how good are you really
// function betterThanAverage(classPoints, yourPoints) {
//   return classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints;
// }
// idiomatic version
// const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints;

// 044 calculate average
// function findAverage(array) {
//   return array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;
// }
// idiomatic version
// const findAverage = array => array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;

// 045 simple multiplication
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }
// idiomatic version
// const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;
// other version
// function simpleMultiplication(number) {
//     return number * (number % 2 === 0 ? 8 : 9);
// }
// idiomatic version
// const simpleMultiplication = number => number * (number % 2 === 0 ? 8 : 9);
// versi memanfaatkan truthy falsy 8 dan 9 dibalik menjadi 9 dan 8, CERDAS !!!!!
// function simpleMultiplication(number) {
//     return number * (number % 2 ? 9 : 8);
// }
// idiomatic version
// const simpleMultiplication = number => number * (number % 2 ? 9 : 8);

// 046 invert values
// function invert(array) {
//    return array.map(array => -array);
// }
// idiomatic version
// const invert = array => array.map(array => -array);

// 047 smash words
// function smash (words) {
//    return words.join(" ");
// };
// idiomatic version
// const smash = words => words.join(" ");

// 048 make uppercase
// function makeUpperCase(str) {
//   return str.toUpperCase();
// }
// idiomatic version
// const makeUpperCase = str => str.toUpperCase();

// 049 you only need one - beginner
// function check(a, x) {
//   return a.includes(x);
// }
// idiomatic version
// const check = (a, x) => a.includes(x);

// // 050 fake binary
// function fakeBin(x){
//   return x.split("").map(n => n < 5 ? "0" : "1").join("");
// }
// // idiomatic version
// const fakeBin = x => x.split("").map(n => (n < 5) ? 0 : 1).join("");

// // 051 COUNT BY X pakai rumus ARRAY.FROM() (style terbaru pengganti for loop manual, tidak perlu pakai let push for)
// function countBy(x, n) {
//   return Array.from({length: n}, (_, i) => x * (i + 1));
// }
// // idiomatic version
// const countBy = (x, n) => Array.from({length: n}, (_, i) => x * (i + 1));

// 052 reversed sequence pakai rumus ARRAY.FROM() lagi n+i urutan maju n-i urutan mundur, KUASAI INI !!!
// const reverseSeq = n => Array.from({length: n}, (_, i) => n - i);

// 053 is he gonna survive
// function hero(bullets, dragons){
// return bullets >= dragons * 2;
// }
// idiomatic version
// const hero = (bullets, dragons) => bullets >= dragons * 2;

// 054 dna to rna conversion replaceAll menggantikan split map join
// string.replaceAll('target', 'replacement');
// function DNAtoRNA(dna) {
//   return dna.replaceAll("T", "U");
// }
// idiomatic version
// const DNAtoRNA = dna => dna.replaceAll("T", "U");

// // 055 will you make it ( PERHATIKAN !!! )
// // ada perbedaan mencolok pakai {} wajib pakai return
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return (distanceToPump / mpg) <= fuelLeft;
// };
// // tanpa pakai {} tidak perlu return
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

// 056 rock paper scissor
// Pakai NESTED TERNARY OPERATOR BISA 3 KONDISI
// ("true" : kondisi baru ? "draw" : "false")
// hati2 typo di tulisan scissor karena dia wajib pake s dibelakangnya jadi scissors, kurang 1 huruf aja bisa gak jalan logika nya
// const rps = (p1, p2) => {
//   return (
//     (p1 === "rock" && p2 === "scissors") ||
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock")
//   )
//     ? "Player 1 won!"
//     : p1 === p2
//     ? "Draw!"
//     : "Player 2 won!";
// };
// // idiomatic version pakai OBJECT MAPPING
// // DONE
// const rps = (p1, p2) =>
//   p1 === p2
//     ? 'Draw!'
//     : { rock: 'scissors', paper: 'rock', scissors: 'paper' }[p1] === p2
//     ? 'Player 1 won!'
//     : 'Player 2 won!';

// 057 if you can't sleep, just count sheep
// const countSheep = num => {
//   let murmur = '';
//   for (let i = 1; i <= num; i++) {
//     murmur += `${i} sheep...`;
//   }
//   return murmur;
// };
// // idiomatic version
// const countSheep = num =>
//   Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');

///////////////////////////////////////////////////////////////////////
// 058 convert a string to an array
// const stringToArray = string => string.split(" ");

// sort diubah menjadi easy to hard agar sesuai dengan skill bertahap dari yang mudah dulu akhirnya level kesulitan ditingkatkan

// 059 flight distance of interceptor planes is miscalculated
// const travelDistance = (avgSpeedKnots, travelTimeMinutes) => avgSpeedKnots * 1.852 * (travelTimeMinutes / 60);

// 060 was the package received before it was sent
// function was_package_received_yesterday(tz_from, tz_to, start, duration) {
//   return start + duration - (tz_from - tz_to) < 0;
// }
// idiomatic version
// const was_package_received_yesterday = (tz_from, tz_to, start, duration) => start + duration - (tz_from - tz_to) < 0;

// 061 collinearity (rumus collinear => x1*y2=x2*y1)
// function collinearity( x1,y1, x2,y2 ) {
//   return x1 * y2 === x2 * y1;
// }
// idiomatic version
// const collinearity = (x1,y1, x2,y2) => x1 * y2 === x2 * y1;

// 062 flick switch
// versi yang disarankan
// const flickSwitch = arr => {
//   let state = true;
//   return arr.map(word => {
//     if (word === "flick") state = !state;
//     return state;
//   });
// };
// ultimate idiomatic ternary one liner
// const flickSwitch = arr => {
//   let state = true;
//   return arr.map(word => (state = word === "flick" ? !state : state));
// };

////////////////////////////////////////////////////////////////////////
// 063 quadrants
// const quadrant = (x, y) =>
//   x > 0 && y > 0 ? 1 :
//   x < 0 && y > 0 ? 2 :
//   x < 0 && y < 0 ? 3 :
//   x > 0 && y < 0 ? 4 :
//   0;

// 064 check same case use REGEX
// const sameCase = (a, b) => {
//   if (!/[a-z]/i.test(a) || !/[a-z]/i.test(b)) return -1;
//   return (a === a.toLowerCase()) === (b === b.toLowerCase()) ? 1 : 0;
// };

// 065 quadratic coefficients solver (rumus Coefficient Quadrat)
// const quadratic = (x1, x2) => [1, -x1 -x2, x1 * x2];

// 066 a wolf in sheep's clothing pakai REVERSE() & FINDINDEX()
// const warnTheSheep = queue => {
//   const index = [...queue].reverse().findIndex(x => x === "wolf");
//     return index === 0
//     ? "Pls go away and stop eating my sheep"
//     : `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
//   }

// 067 total amount of points pakai REDUCE()
// const points = games => 
//   games.reduce((total, game) => {
//     const [x, y] = game.split(':').map(Number); 
//     return total + (x > y ? 3 : x === y ? 1 : 0);
//   }, 0);

// 068 pillars
// function pillars(numPill, dist, width) {
//   return (numPill - 1) * (dist * 100) + (numPill > 2 ? width * (numPill - 2) : 0); 
//   };
// idiomatic version
// const pillars = (numPill, dist, width) => (numPill - 1) * (dist * 100) + (numPill > 2 ? width * (numPill -2) : 0);

// // 069 twice as old pakai RUMUS PERBANDINGAN UMUR 
// function twiceAsOld (dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// };
// // idiomatic version
// const twiceAsOld = (dadYearsOld, sonYearsOld) => 
//   Math.abs(dadYearsOld - 2 * sonYearsOld);

////////////////////////////////////////////////////////////////////////
// 070 total pressure calculation
// const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => 
//   (((givenMass1/molarMass1)+(givenMass2/molarMass2))*0.082*(temp+273.15))/volume;

//struktur default REDUCE
array.reduce((accumulator, currentValue, index, array) => {
  // logika akumulasi
}, initialValue);

// 071 sum of differences in array
const sumOfDifferences = arr => 
  arr.sort((a, b) => b - a).reduce((sum, val, i, a) => 
  i < a.length - 1 ? sum + val - a[i + 1] : sum, 0);

// 072 expressions matter MATH.MAX (MENCARI NILAI TERBESAR)
const expressionMatter = (a, b, c) => Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));

// 073 student's final grade - NESTED TERNARY
function finalGrade (exam, projects) {
  return 
  (exam>90 || projects>10) ? 100 :
  (exam>75 && projects>=5) ? 90 :
  (exam>50 && projects>=2) ? 75 : 0;
}
// idiomatic version
const finalGrade = (exam, projects) =>
  (exam>90 || projects>10) ? 100 :
  (exam>75 && projects>=5) ? 90 :
  (exam>50 && projects>=2) ? 75 : 0;

// 074 area or perimeter 
const areaOrPerimeter = (l , w) =>
  l === w ? l * w : l + l + w + w;

// 075 the feast of many beasts // AMBIL HURUF AWAL & AKHIR
// VERSI ES 2022 !!!!
const feast = (beast, dish) => beast.at(0) + beast.at(-1) === dish.at(0) + dish.at(-1);

// 076 find neasrest square number
const nearestSq = n => {
  const root = Math.sqrt(n);
  const [low, high] = [Math.floor(root), Math.ceil(root)];
  return Math.abs(n - low**2) <= Math.abs(n - high**2) ? low**2 : high**2;
};

// 077 cat years, dog years
const humanYearsCatYearsDogYears = humanYears => [
  humanYears, 
  humanYears < 2 ? humanYears * 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 4,
  humanYears < 2 ? humanYears * 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 5
  ];

// 078 define a card suit
const defineSuit = card => {
  if (card.includes('♣')) return 'clubs';
  if (card.includes('♦')) return 'diamonds';
  if (card.includes('♥')) return 'hearts';
  if (card.includes('♠')) return 'spades';
};

////////////////////////////////////////////////////////////////////////
// 079 multiple of index
const multipleOfIndex = array =>
  array.filter((val, i) => (i === 0 && val === 0) || (i !== 0 && val % i === 0));

// 080 csv representation of array
const toCsvText = array => array.map(row => row.join(",")).join("\n");

// 081 multiplication table for number
const multiTable = number => Array.from({length: 10}, (_, i) => `${i + 1} * ${number} = ${number * (i + 1)}`).join("\n");

// 082 type of sum - TYPEOF
function typeOfSum(a, b) {
  return typeof(a+b);
}
// idiomatic version
const typeOfSum = (a,b) => typeof(a+b);

// 083 array plus array
// const arrayPlusArray = (arr1, arr2) => 
// arr1.reduce((sum, n) => sum + n, 0) +
// arr2.reduce((sum, n) => sum + n, 0);
// refactoring version
const arrayPlusArray = (arr1, arr2) => 
  [...arr1, ...arr2].reduce((sum, n) => sum + n, 0);

// 084 sort my textbooks - TRICKY BANGET NIH SOAL
const sorter = textbooks =>
  textbooks.sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    return lowerA < lowerB ? -1 : lowerA > lowerB ? 1 : 0;
  });











































