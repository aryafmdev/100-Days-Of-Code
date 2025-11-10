// 01 hello world - OKE
// console.log(parameterVariable);

// 02 data types - OKE
// console.log(firstInteger + Number(secondInteger));
// console.log(firstDecimal + Number(secondDecimal));
// console.log(firstString + secondString);

// 03 arithmetic operators - OKE
// const getArea = (length, width) => length * width;
// const getPerimeter = (length, width) => 2 * (length + width);

// 04 functions - factorial - OKE
// const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

// 05 let & const - ADA JEBAKAN DI R HARUS SESUAI INTRUKSI SOAL - OKE
// const PI = Math.PI;
// const r = +readline();
// const area = PI * (r**2);
// const perimeter = 2 * PI * r;
// // Print the area of the circle:
// console.log(area);
// // Print the perimeter of the circle:
// console.log(perimeter);

// 06 conditional statement if-else - OKE
// const getGrade = score =>
//   score >= 0 && score <= 5 ? 'F' :
//   score <= 10 ? 'E' :
//   score <= 15 ? 'D' :
//   score <= 20 ? 'C' :
//   score <= 25 ? 'B' :
//   score <= 30 ? 'A' : '';

// 07 conditional statement switch (yang di cek INDEX AWAL) - OKE
// const getLetter = s =>
//   'aeiou'.includes(s[0]) ? 'A' :
//   'bcdfg'.includes(s[0]) ? 'B' :
//   'hjklm'.includes(s[0]) ? 'C' : 'D';

// 08 loops - REFACTORED LEBIH MUDAH DIPAHAMI - OKE
// const vowelsAndConsonants = s => {
//   const isVowel = v => 'aiueo'.includes(v);
//   const isConsonant = c => !isVowel.includes(c);
//   const chars = s.split('');

//   chars.filter(isVowel).forEach(v => console.log(v));
//   chars.filter(isConsonant).forEach(c => console.log(c));
// };

//versi lebih ketat - dibatasi hanya huruf a-z saja tanpa karakter non huruf ikut terhitung
// const vowelsAndConsonants = s => {
//   const isVowel = v => 'aiueo'.includes(v);
//   const isLetter = l => (l>='a' && l<='z');
//   const isConsonant = c => isLetter(c) && !isVowel(c);
//   const sentences = s.toLowerCase().split('');

//   sentences.filter(isVowel).forEach(v=>console.log(v));
//   sentences.filter(isConsonant).forEach(c=>console.log(c));
// };

// 09 arrays - PAKAI SPREAD OPERATOR & NEW SET() SORT() AT() - OKE
// const getSecondLargest = nums =>
// [...new Set(nums)].sort((a,b)=>b-a).at(1);

////////////////////////////////////////////////////////////////////////

// 10 try catch finally - OKE
// const reverseString = s => {
//   try {
//     s = s.split('').reverse().join('');
//   } catch(error) {
//     console.log(error.message);
//   } finally {
//     console.log(s);
//   }
// }

// 11 throw pakai constructor THROW NEW ERROR
// const isPositive = a => {
//   if (a > 0) return 'YES';
//   if (a === 0) throw new Error('Zero Error');
//   throw new Error('Negative Error');
// };

// 12 create a rectangle function
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  };
}

// 13 count objects
const getCount = objects =>
  objects.reduce((sum, { x, y }) => sum + (x === y), 0);

// 14 classes


// 15 inheritance


// 16 template literals












































