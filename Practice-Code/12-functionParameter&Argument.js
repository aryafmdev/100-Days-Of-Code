// a dan b yang pertama ini adalah diseut dengan istilah parameter
function tambah(a, b) {
  return a + b;
}

// 2 dan 3 yang kedua ini adalah disebut dengan istilah argument
tambah(2, 3); // aslinya seperti ini, dia sudah menyimpan nilai, hanya saja belum kelihatan krn belum ditampilkan, selanjutnya jika ingin menapilkan hasil nya tinggal tentukan dimana mau ditampilkan apakah di dalam alert atau ke dalam console log

// ini contoh jika ingin ditampilkan ke dalam console log
console.log(tambah(2, 3));

// atau bisa juga dibuat lebih simple seperti ini pengisian nilai argument nya
let hasil = tambah(2, 3);
console.log(hasil);

// ada lagi cara lain dalam pengisian nilai argument nya
let a = 2;
let b = 3;
let c = tambah(a, b);
console.log(c);

// atau bisa juga nilai argument nya diambil dari inputan user seperti contoh dibawah ini (ini sengaja nama variabel nya berubah2 agar tidak berbenturan dengan variabel yang sudah dideklarasikan sebelumnya)
// kalau begini nanti hasilnya akan menjadi data string
let inputUser1 = prompt("masukkan angka pertama"); 
let inputUser2 = prompt("masukkan angka kedua");
let d = tambah(inputUser1, inputUser2);
console.log(d);

// atau bisa juga diubah menjadi number dan dijumlahkan langsung seperti dibawah ini
let e = Number(prompt("masukkan angka pertama"));
let f = Number(prompt("masukkan angka kedua"));
let g = tambah(e, f);
console.log(g);

// atau dengan cara lain dengan parseInt (untuk merubah jadi bilangan integer atau bilangan bulat), kebalikannya adalah parseFloat (untuk merubah jadi bilangan desimal atau bilangan pecahan)
let h = parseInt(prompt("masukkan angka pertama"));
let i = parseInt(prompt("masukkan angka kedua"));
let j = tambah(h, i);
console.log(j);

// bisa juga di dalam argument itu dikalikan lagi per tiap argument, seperti contoh dibawah ini
let k = parseInt(prompt("masukkan angka pertama"));
let l = parseInt(prompt("masukkan angka kedua"));
let m = tambah(k*2, l*2);
console.log(m);
// jadi intinya kita bisa banyak menyimpan atau mengolah bentuk argument sesuai kebutuhan

// ini contoh lain lagi menampilkan argument dengan memberikan function yang lain lagi, melanjutkan function "tambah" yang di awal tadi
// ini membentuk fungsi baru dengan nama "kali"
function kali(a, b) {
  return a * b;
}
let total = kali(tambah(1, 2), tambah(3, 4)); // dan ini menggabungkan 2 function "tambah & kali"
console.log(total);
