//  Manipulasi array

// 6. forEach = untuk melakukan pengulangan pada array dengan syntax yg lebih simple

// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ini bentuk for normal / for yang biasa nya
// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// ini bentuk forEach
// angka.forEach(function (item) {
//   console.log(item);
// });

// ini contoh jika digabung dengan data string atau concatenation
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nama = ["Arya", "Fajar", "Maulana", "Dwi", "Kania", "Ayu"];
// huruf e mewakili elemen nama, huruf i mewakili index urutan angka
nama.forEach(function (e, i) {
  console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
});

// 7. map = mirip forEach bedanya dia bisa mengembalikan nilai menjadi nilai baru

let angkaAcak = [1,3,2,6,5,4,9,8,7];
let angkaKaliDua = angkaAcak.map(function (item) {
  return item * 2;
}); // ada .map didalam block, dan jika itu diganti dengan .forEach malah jadi error, krn forEach tdk bisa mengembalikan nilai
console.log(angkaKaliDua.join(', '));

// 8. sort = untuk mengurutkan data array

let angkaAcak2 = [12,1,18,15,3,14,10,2,6,20,5,19,9,11,16,8,17,7];
console.log(angkaAcak2.join(', ')); // ini untuk menampilkan sebelum di sort
angkaAcak2.sort();
console.log(angkaAcak2.join(', ')); // ini untuk menampilkan setelah di sort, tapi jika ada angka diatas 9 dia akan mengurutkan dengan urutan karakter, persis seperti sort nama file di explorer

let angkaAcak3 = [12,1,18,15,3,14,10,2,6,20,5,19,9,11,16,8,17,7];
console.log(angkaAcak3.join(', ')); // ini untuk menampilkan sebelum di sort
angkaAcak3.sort(function (a, b) {
  return a - b;
}); // ini function untuk mengurutkan angka dari kecil ke besar yang benar menyiasati kendala di atas

console.log(angkaAcak3.join(', ')); // ini untuk menampilkan setelah di sort

// 9. filter = untuk memfilter data array

let angkaAcak4 = [12,1,18,15,3,14,10,2,6,20,5,19,9,11,16,8,17,7];
let angkaGanjil = angkaAcak4.filter(function (item) {
  return item % 2 !== 0; // ini untuk memfilter dan memunculkan hanya angka ganjil
});
console.log(angkaGanjil.join(', '));

// 10. find = untuk mencari data di dalam array dan hanya mencari 1 data aja

let angkaAcak5 = [12,1,18,15,3,14,10,2,6,20,5,19,9,11,16,8,17,7];
let angkaCari = angkaAcak5.find(function (item) {
  return item === 15; // ini untuk mencari angka 15
});
console.log(angkaCari); // ini makanya menampilkan console nya tidak bisa pakai join krn find bukan memunculkan data array, tapi hanya memunculkan 1 data saja

// 11. some = untuk mengecek apakah ada data di dalam array yang sesuai dengan kriteria
let angkaAcak6 = [12,1,18,15,3,14,10,2,6,20,5,19,9,11,16,8,17,7];
let angkaCari2 = angkaAcak6.some(function (item) {
  return item === 15; // ini untuk mencari angka 15
});
console.log(angkaCari2); // ini akan menampilkan true krn ada angka 15 di dalam array

// 12. every = untuk mengecek apakah semua data di dalam array sesuai dengan kriteria
let angkaAcak7 = [12,1,18,15,3,14,10,2,6,20,5,19,9,11,16,8,17,7];
let angkaCari3 = angkaAcak7.every(function (item) {
  return item > 10; // ini untuk mengecek apakah semua angka di dalam array lebih besar dari 10
});
console.log(angkaCari3); // ini akan menampilkan false krn tidak semua angka di dalam array lebih besar dari 10

