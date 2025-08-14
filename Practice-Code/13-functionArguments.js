// Function Arguments (pake "s" krn berbeda arguments dan argument) adalah untuk menangani jumlah parameter dan argument yang tidak imbang, contoh nya adalah jika parameter hanya 2 data tapi di argument ada 3 data

// function tambah(a, b) {
//   return a + b;
// }

// let hasil = tambah(2, 3, 4); // jika seperti ini, maka argument yang terakhir yaitu angka 4 akan diabaikan
// console.log(hasil);

// jika kita ingin semua argumen ikut ditambahkan terpaksa harus repot2 mengupdate parameter di atas dan return nya juga, seperti contoh dibawah ini

// ini contoh update menjadi 3 parameter
// function tambah(a, b, c) {
//   return a + b + c;
// }

// let hasil = tambah(2, 3, 4); 
// console.log(hasil);

// ini contoh update menjadi 4 parameter
// function tambah(a, b, c, d) {
//   return a + b + c + d;
// }

// let hasil = tambah(2, 3, 4, 5); 
// console.log(hasil);

// dan ini cara memanfaatkan arguments pake 's' dalam menangani argument yang akan bertambah jumlah data nya, tanpa perlu memodifikasi ulang parameter dan return nya

function tambah() {
  let hasil = 0;
  for( let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

let total = tambah(2, 3, 4, 5, 6, 7, 8, 9, 10); // bahkan jika argument ini ditambah berapa kalipun sesuai dengan function awal di atas maka ini tetap bisa dijalankan
console.log(total);
