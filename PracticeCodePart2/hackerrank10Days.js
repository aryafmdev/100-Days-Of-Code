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
// PERLU DIULANG msh belum paham
const vowelsAndConsonants = (s) => {
  const isVowel = (c) => 'aiueo'.includes(c);
  const chars = s.split('');

  chars.filter(isVowel).forEach((c) => console.log(c));
  chars.filter((c) => !isVowel(c)).forEach((c) => console.log(c));
};

// 09 arrays - [...new set(arr)] & sort descending (besar ke kecil)
const getSecondLargest = (nums) => [...new Set(nums)].sort((a, b) => b - a)[1];

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
// cara lama ES5
function Rectangle(a, b) {
  (this.length = a),
    (this.width = b),
    (this.perimeter = 2 * (a + b)),
    (this.area = a * b);
}
// cara baru ES6+
class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
  }
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

// 18 bitwise operators

// 19 javascript dates

// 20 regular expressions I

// 21 regular expressions II

// 22 regular expressions III

// 23 create a button

// 24 buttons container

// 25 binary calculator
