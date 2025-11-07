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

// 08 loops - FILTER() SPLIT() JOIN()
// PERLU DIULANG msh belum paham
const vowelsAndConsonants = (s) => {
  const isVowel = (c) => 'aiueo'.includes(c);
  const chars = s.split('');
  
  chars.filter(isVowel).forEach(c => console.log(c));
  chars.filter(c => !isVowel(c)).forEach(c => console.log(c));
};

// 09 arrays - [...new set(arr)] & sort descending (besar ke kecil)
const getSecondLargest = nums =>
[...new Set(nums)].sort((a,b)=>b-a)[1];

// 10 try, catch, & finally - TRY CATCH FINALLY
// PERLU DIULANG !!!
const reverseString = s => {
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
