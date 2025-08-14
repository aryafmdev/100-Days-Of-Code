// ini bentuk function yang fokus pada membentuk fungsinya terlebih dahulu, lalu selanjutnya bisa dipanggil berulang kali tanpa ribet mengganti nilai parameter nya (dalam kasus ini adalah fungsi untuk menjumlahkan volume 2 buah kubus)
// ini seperti membentuk urutan kerja mesin, atau menjadi otak dari program dibalik fungsi nya yang akan dijalankan
function jumlahVolumeDuaKubus (a, b) {
  let volumeA;
  let volumeB;
  let volumeTotal;

  volumeA = a*a*a;
  volumeB = b*b*b;
  volumeTotal = volumeA + volumeB;
  return volumeTotal;
}
// untuk menampilkan hasil bisa di console log atau di alert bebas tinggal pilih sesuai kebutuhan, dan hanya tinggal isikan atau update parameternya di bawah seperti contoh di bawah ini, berulang2 kali tanpa ribet
console.log(jumlahVolumeDuaKubus(2, 3));
console.log(jumlahVolumeDuaKubus(4, 5));
console.log(jumlahVolumeDuaKubus(6, 7));
console.log(jumlahVolumeDuaKubus(8, 9));
console.log(jumlahVolumeDuaKubus(10, 11));
console.log(jumlahVolumeDuaKubus(12, 13));
console.log(jumlahVolumeDuaKubus(14, 15));
console.log(jumlahVolumeDuaKubus(16, 17));
console.log(jumlahVolumeDuaKubus(18, 19));
console.log(jumlahVolumeDuaKubus(20, 21));
console.log(jumlahVolumeDuaKubus(22, 23));
console.log(jumlahVolumeDuaKubus(24, 25));
console.log(jumlahVolumeDuaKubus(26, 27));
console.log(jumlahVolumeDuaKubus(28, 29));
console.log(jumlahVolumeDuaKubus(30, 31));


// ini salah satu bentuk function yang kurang cocok untuk dipakai/dipanggil berulang2
// function jumlahVolumeDuaKubus(a, b) {
//   let jumlah = a**3 + b**3;
//   return jumlah;
// }
// let a = 2;
// let b = 3;
// let c = jumlahVolumeDuaKubus(a, b);
// console.log(c);

