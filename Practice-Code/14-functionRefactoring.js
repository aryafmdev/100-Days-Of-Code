// Refactoring adalah semacam cara untuk menyederhanakan kode dan membuat nya lebih simple, lebih mudah dipahami, dan lebih mudah diupdate atau diubah jika ada perubahan, ini contoh dengan memakai function yang dibawah ini kita sederhanakan lagi

// yang awal nya seperti ini normal nya
function jumlahVolumeDuaKubus(a, b) {
  let volumeA;
  let volumeB;
  let volumeTotal;

  volumeA = a * a * a;
  volumeB = b * b * b;
  volumeTotal = volumeA + volumeB;
  return volumeTotal;
}
console.log(jumlahVolumeDuaKubus(2, 3));

// bisa disederhanakan menjadi seperti ini, kita ganti nama variabel dan parameternya biar tidak tabrakan ya menjadi c dan d
function jlhVolDuaKubus(c, d) {
  return c*c*c + d*d*d;
}
console.log(jlhVolDuaKubus(2, 3));
// nah dari bentuk function yang sebelumnya 7 baris menjadi cukup 1 baris, dan hasilnya juga sama, ini lah contoh refactoring sederhana
// mindblowing bgt kan ya, dari 7 baris menjadi sebaris aja


// ini bentuk function yang fokus pada membentuk fungsinya terlebih dahulu, lalu selanjutnya bisa dipanggil berulang kali tanpa ribet mengganti nilai parameter nya (dalam kasus ini adalah fungsi untuk menjumlahkan volume 2 buah kubus)
// ini seperti membentuk urutan kerja mesin, atau menjadi otak dari program dibalik fungsi nya yang akan dijalankan
// function jumlahVolumeDuaKubus(a, b) {
//   let volumeA;
//   let volumeB;
//   let volumeTotal;

//   volumeA = a * a * a;
//   volumeB = b * b * b;
//   volumeTotal = volumeA + volumeB;
//   return volumeTotal;
// }
// untuk menampilkan hasil bisa di console log atau di alert bebas tinggal pilih sesuai kebutuhan, dan hanya tinggal isikan atau update parameternya di bawah seperti contoh di bawah ini, berulang2 kali tanpa ribet
// console.log(jumlahVolumeDuaKubus(2, 3));
// console.log(jumlahVolumeDuaKubus(4, 5));
// console.log(jumlahVolumeDuaKubus(6, 7));
// console.log(jumlahVolumeDuaKubus(8, 9));
// console.log(jumlahVolumeDuaKubus(10, 11));
// console.log(jumlahVolumeDuaKubus(12, 13));
// console.log(jumlahVolumeDuaKubus(14, 15));
// console.log(jumlahVolumeDuaKubus(16, 17));
// console.log(jumlahVolumeDuaKubus(18, 19));
// console.log(jumlahVolumeDuaKubus(20, 21));
// console.log(jumlahVolumeDuaKubus(22, 23));
// console.log(jumlahVolumeDuaKubus(24, 25));
// console.log(jumlahVolumeDuaKubus(26, 27));
// console.log(jumlahVolumeDuaKubus(28, 29));
// console.log(jumlahVolumeDuaKubus(30, 31));