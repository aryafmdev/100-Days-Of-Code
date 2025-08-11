'use strict';

// Import prompt-sync untuk input command line
const prompt = require('prompt-sync')({ sigint: true });

// Fungsi untuk mendapatkan input angka yang valid
function getValidNumberInput(promptMessage) {
  let input;
  while (true) {
    input = prompt(promptMessage);
    const number = Number(input);
    if (!isNaN(number)) {
      return number;
    }
    console.log('Input tidak valid. Silakan masukkan angka yang valid.');
  }
}

//  Fungsi untuk mendapatkan input operator yang valid
function getValidOperatorInput(promptMessage) {
  const validOperators = ['+', '-', '*', '*', '/', '%', '**'];
  let input;
  while (true) {
    input = prompt(promptMessage);
    if (validOperators.includes(input)) {
      return input;
    }
    console.log(
      `Operator tidak valid. Silahkan masukkan salah satu dari: ${validOperators.join(
        ', '
      )}`
    );
  }
}

// Fungsi operasi aritmatika
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return 'Error: Pembagian dengan Nol!';
  }
  return a / b;
}
function modulo(a, b) {
  if (b === 0) {
    return 'Error: Modulo dengan Nol';
  }
  return a % b;
}
function power(a, b) {
  return a ** b;
}

// Proses loop kalkulasi utama
console.log('Selamat datang di Kalkulator Interaktif & Penganalisis Data!');
console.log(
  'Anda dapat melakukan operasi aritmatika dasar dan menganalisis hasilnya.'
);

while (true) {
  console.log('\n--- Perhitungan Baru ---');

  // Mengambil input dari pengguna
  const num1 = getValidNumberInput('Masukkan angka pertama:');
  const operator = getValidOperatorInput(
    'Masukkan operator (+, -, *, /, %, **):'
  );
  const num2 = getValidNumberInput('Masukkan angka kedua:');

  // Melakukan perhitungan berdasarkan operator
  let result;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    case '%':
      result = modulo(num1, num2);
      break;
    case '**':
      result = power(num1, num2);
      break;
    default:
      console.log('Terjadi kesalahan dengan operator.');
      continue;
  }

  // Menganalisis dan menampilkan hasil
  analyzeResult(result);

  // Fungsi untuk menganalisis hasil
  function analyzeResult(result) {
    // Mengecek tipe hasil
    const resultType = typeof result;
    
    console.log(`\nHasil: ${result}`);
    console.log(`Tipe: ${resultType}`);

    if (resultType === 'number') {
      // Mengecek apakah hasilnya positif, negatif, atau nol
      if (result > 0) {
        console.log('Nilai: Positif');
      } else if (result < 0) {
        console.log('Nilai: Negatif');
      } else {
        console.log('Nilai: Nol');
      }

      // Mengecek apakah hasilnya integer atau float
      console.log(
        `Tipe angka: ${Number.isInteger(result) ? 'Integer' : 'Floating-point'}`
      );

      // Mengecek apakah hasilnya genap atau ganjil (hanya untuk integer)
      if (Number.isInteger(result)) {
        console.log(`Paritas: ${result % 2 === 0 ? 'Genap' : 'Ganjil'}`);
      }

      // Kondisi kompleks menggunakan operator logika
      if (result > 0 && result % 2 === 0 && Number.isInteger(result)) {
        console.log('Kasus khusus: Integer positif dan genap');
      } else if (result < 0 || !Number.isInteger(result)) {
        console.log('Kasus khusus: Negatif atau floating-point');
      }
    } else if (resultType === 'string') {
      // Menangani pesan error
      console.log(`Pesan error: ${result}`);
    } else {
      // Menangani nilai undefined atau null menggunakan nullish coalescing
      const message =
        result ?? 'Hasil tidak terdefinisi atau null, sesuatu telah salah!';
      console.log(`Hasil tak terduga: ${message}`);
    }
  }

  // Menanyakan apakah pengguna ingin melanjutkan
  const continueCalculation = prompt(
    '\nApakah Anda ingin melakukan perhitungan lagi? (yes/no) : '
  ).toLowerCase();
  if (continueCalculation === 'no' || continueCalculation === 'n') {
    console.log(
      'Terima kasih telah menggunakan Kalkulator Interaktif & Penganalisis Data!'
    );
    break;
  }
}
