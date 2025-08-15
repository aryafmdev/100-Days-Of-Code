//  manipulasi array

// 1. menambah isi array

// ini versi 1, declare dulu baru ditampilkan ke console
// let arr = ["a", 1, true];
// console.log(arr[1]);

// ini versi 2, declare array dulu baru value yang di isi
// let arr = [];
// arr[0] = "Arya";
// arr[1] = "Fajar"
// arr[2] = "Maulana";
// console.log(arr);

// 2. menghapus isi array

// let arr = ["Arya", "Fajar", "Maulana"];
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array

// menggunakan looping for dan menggunakan method.length untuk menampilkan seluruh isi array

// let arr = ["Arya", "Fajar", "Maulana"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// menggunakan looping for dan digabung dengan data string atau concatenation
// let arr = ["Arya", "Fajar", "Maulana"];
// for (let i = 0; i < arr.length; i++) {
//   console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + arr[i]);
// }

// METHOD PADA ARRAY

// 1. Length = untuk menghitung jumlah data pada array & menampilkan seluruh isi data array.

// let arr = ["Arya", "Fajar", "Maulana"];
// console.log(arr.length); // ini untuk menampilkan jumlah isi data array
// console.log(arr); // ini untuk menampilkan seluruh isi data array nya

// 2. Join = merubah data array menjadi string

// let arr = ["Arya", "Fajar", "Maulana"];
// console.log(arr.join()); // ini pemisahnya default pakai koma
// console.log(arr.join(' ')); // ini pemisah datanya pakai spasi kosong
// console.log(arr.join(', ')); // ini pemisah datanya pakai koma dan spasi

// 3. Push & Pop (menambah dan menghapus data di akhir array)

// Push = menambah data array di akhir (bisa langsung tambahin banyak data)

let arr = ["Arya", "Fajar", "Maulana"];
arr.push("Dwi", "Kania", "Ayu"); // bisa ditambahkan 1 per 1 atau langsung banyak data
console.log(arr.join(', ')); // ini untuk menampilkan data array dalam bentuk string dan juga dikasih separator koma spasi agar lebih enak untuk dibaca

// Pop = menghapus data array di akhir (kalau hapus data harus dilakukan 1 per 1)

arr.pop(); // ini untuk menghapus 1 data di akhir array
arr.pop(); // ini juga untuk menghapus 1 data lagi di akhir array
arr.pop(); // ini juga untuk menghapus 1 data lagi di akhir array
console.log(arr.join(', ')); // ini untuk menampilkan data array yang sudah di hapus

// 4. Shift & Unshift (menggeser/menghapus dan menggeser masuk/menambah data di awal array)

// Shift = menghapus data array di awal (kalau hapus data harus dilakukan 1 per 1)

arr.shift(); // ini untuk menghapus 1 data di awal array
arr.shift(); // ini juga untuk menghapus 1 data lagi di awal array
console.log(arr.join(', ')); // ini untuk menampilkan data array yang sudah di hapus

// Unshift = menambah data array di awal (bisa langsung tambahin banyak data)

arr.unshift("Arya", "Fajar"); // bisa ditambahkan 1 per 1 atau langsung banyak data
console.log(arr.join(', ')); // ini untuk menampilkan data array dalam bentuk string dan juga dikasih separator koma spasi agar lebih enak untuk dibaca
