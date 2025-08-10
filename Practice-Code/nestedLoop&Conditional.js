// let s = '';
// for ( let i = 0; i < 10; i++) {
//     s += '*';
// }
// console.log(s);
// // output: **********

// let s = '';
// for ( let i = 0; i < 10; i++) {
//     s += '*';
//     s += '\n';
// }
// console.log(s);
// // output: ********** (ke bawah)

// let s = '';
// for ( let i = 0; i < 10; i++) {
//     for ( let j = 0; j < 5; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);
// // output 5 bintang ke samping dan 10 bintang ke bawah

// let s = '';
// for ( let i = 0; i < 10; i++) {
//     for ( let j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);
// output:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// let s = '';
// for ( let i = 10; i > 0; i--) {
//     for ( let j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);
// output:
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// let s = '';
// for ( let i = 0; i < 10; i++) {
//     for ( let j = 0; j <= i; j++)
//       {s += '*';}
//     s += '\n';
// }
// for ( let i = 9; i > 0; i--) {
//     for ( let j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);
// // output : jadi bentuk segitiga mata panah ke kanan

// Soal latihan video 25-1
// let s = '';
// let tinggi = 10;
// // i biasanya dijadikan patokan untuk nilai awal
// for (let i = 0; i < tinggi; i++) {

//   // Tambahkan spasi
//   for (let spasi = 0; spasi < i; spasi++) {
//     s += '.';
//   }

//   // Tambahkan bintang
//   for (let bintang = 0; bintang < tinggi - i; bintang++) {
//     s += '*';
//   }

//   s += '\n';
// }

// console.log(s);

// =============================================================================================

// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *
// for ( i = 0; i < 10; i++) {
//  string += '*';
//  // ini untuk membuat menjadi baris baru
//  string += '\n';
// }
// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *
// for ( i = 0; i < 7; i++) {
//  // ini utk pengulangan dalam tiap baris atau perbaris
//  for ( j = 0; j < 10; j++) {
//   string += '*';
//  }
//  // ini untuk membuat agar turun menjadi baris baru
//  string += '\n';
// }
// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *, dan ini digabung dengan \n menjadi penentu jumlah baris
// for ( i = 0; i < 15; i++) {
//  // ini utk pengulangan dalam tiap baris atau perbaris
//  for ( j = 0; j <= i; j++) {
//   string += '*';
//  }
//  // ini untuk membuat agar turun menjadi baris baru
//  string += '\n';
// }
// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // soal tantangan video 25 soal ke 1 - completed - berhasil
// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *, dan ini digabung dengan \n menjadi penentu jumlah baris
// for ( i = 0; i < 10; i++) {
//  // ini utk pengulangan spasi atau ruang kosong, biar mudah memahaminya kita kasih titik biar kelihatan
//  for ( spasi = 0; spasi < i; spasi++) {
//   string += '.';
//  }
//  // ini utk pengulangan * dalam tiap baris atau perbaris
//  for ( bintang = 0; bintang < 10 - i; bintang++ ) {
//   string += '*';
//  }
//  // ini untuk membuat agar turun menjadi baris baru
//  string += '\n';
// }
// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // soal tantangan video 25 soal ke 2 - completed - berhasil
// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *, dan ini digabung dengan \n menjadi penentu jumlah baris
// for ( i = 0; i < 10; i++) {
//  // ini utk pengulangan bintang nya dalam 1 baris berurutan dari kecil ke besar
//  for ( bintang = 0; bintang <= i; bintang++) {
//   string += '*';
//  }
//   // ini untuk membuat agar turun menjadi baris baru
//  string += '\n';
// }

// for ( j = 10; j >= 0; j--) {
//  // ini utk pengulangan bintang nya dalam 1 baris berurutan dari besar ke kecil
//  for ( bintang = 0; bintang <= j; bintang++) {
//   string += '*';
//  }
//   // ini untuk membuat agar turun menjadi baris baru
//  string += '\n';
// }
// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // soal tantangan ini bentuk anak panah terbalik
// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *, dan ini digabung dengan \n menjadi penentu jumlah baris
// for ( i = 10; i > 0; i--) {
//  // ini utk pengulangan spasi atau ruang kosong, biar mudah memahaminya kita kasih titik biar kelihatan
//  for ( spasi = 0; spasi < i; spasi++) {
//   string += '.';
//  }
//  // ini utk pengulangan * dalam tiap baris atau perbaris
//  for ( bintang = 0; bintang <= 10 - i; bintang++ ) {
//   string += '*';
//  }
//  // ini untuk membuat agar turun menjadi baris baru
//  string += '\n';
// }

// for ( j = 0; j <= 10; j++) {
//  // ini utk pengulangan spasi atau ruang kosong, biar mudah memahaminya kita kasih titik biar kelihatan
//  for ( spasi = 0; spasi < j; spasi++) {
//   string += '.';
//  }
//  // ini utk pengulangan * dalam tiap baris atau perbaris
//  for ( bintang = 0; bintang <= 10 - j; bintang++ ) {
//   string += '*';
//  }
//  // ini untuk membuat agar turun menjadi baris baru
//  string += '\n';
// }
// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // soal tantangan video 25 soal ke 3 - completed - berhasil
// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *, dan ini digabung dengan \n menjadi penentu jumlah baris
// for (i = 10; i > 0; i--) {
//   // ini utk pengulangan spasi atau ruang kosong, biar mudah memahaminya kita kasih titik biar kelihatan
//   for (spasi = 0; spasi < i; spasi++) {
//     string += '.';
//   }
//   // ini utk pengulangan * dalam tiap baris atau perbaris
//   for (bintang = 0; bintang <= 10 - i; bintang++) {
//     string += '*';
//   }
//   // ini utk pengulangan susunan bintang lapis ke 2 dalam tiap baris atau perbaris
//   for (bintang2 = 0; bintang2 < 10 - i; bintang2++) {
//     string += '*';
//   }
//   // ini utk pengulangan spasi nya kembali di urutan lapis ke 4, sebenarnya gak perlu dibuat jg gpp, tapi agar lebih paham bentuk sebenarnya
//   for (spasi = 0; spasi < i; spasi++) {
//     string += '.';
//   }
//   // ini untuk membuat agar turun menjadi baris baru
//   string += '\n';
// }

// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // soal tantangan video 25 soal ke 4 - completed - berhasil - yeeeeeaaaaaaaaaaaaaahhhhhhhhhhhh
// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang *, dan ini digabung dengan \n menjadi penentu jumlah baris
// for (i = 10; i > 0; i--) {
//   // ini utk pengulangan spasi atau ruang kosong, biar mudah memahaminya kita kasih titik biar kelihatan
//   for (spasi = 0; spasi < i; spasi++) {
//     string += '.';
//   }
//   // ini utk pengulangan * dalam tiap baris atau perbaris
//   for (bintang = 0; bintang <= 10 - i; bintang++) {
//     string += '*';
//   }
//   // ini utk pengulangan susunan bintang lapis ke 2 dalam tiap baris atau perbaris
//   for (bintang2 = 0; bintang2 < 10 - i; bintang2++) {
//     string += '*';
//   }

//   // ini untuk membuat agar turun menjadi baris baru
//   string += '\n';
// }

// // ini utk pengulangan spasi dan bintang di baris ke 2, biar mudah memahaminya kita kasih titik biar kelihatan
// for (i = 0; i < 9; i++) {
//   // ini pengulangan spasi baris ke 2 nya, dikasih titik agar kelihatan bentuknya
//   for (spasi2 = -1; spasi2 <= i; spasi2++) {
//     string += '.';
//   }
//   // ini untuk bintang lapis ke 2 di baris ke 2
//   for (bintang3 = 0; bintang3 < 9 - i; bintang3++) {
//     string += '*';
//   }
//   // ini untuk bintang lapis ke 3 di baris ke 2
//   for (bintang4 = 0; bintang4 < 8 - i; bintang4++) {
//     string += '*';
//   }

//   string += '\n';
// }

// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// // soal tantangan video 25 soal ke 5 - completed - berhasil - oh yeaaahhhhhhhhhhhh
// // string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
// let string = '';
// // for ini utk pengulangan bentuk string yang diinginkan, dalam kasus ini adalah bentuk bintang # dan spasi, dan ini digabung dengan \n menjadi penentu jumlah baris
// for (i = 0; i < 5; i++) {
//   // ini utk pengulangan spasi atau ruang kosong, biar mudah memahaminya kita kasih titik biar kelihatan
//   for (tagar1 = 0; tagar1 < 5; tagar1++) {
//     string += '# ';
//   }
//   // ini untuk membuat agar turun menjadi baris baru
//   string += '\n';

//   // ini pengulangan kebalikan dari yang di atas yaitu spasi dan tagar
//   for (tagar2 = 0; tagar2 < 5; tagar2++) {
//     string += ' #';
//   }
//   // ini untuk membuat agar turun menjadi baris baru
//   string += '\n';
// }

// // consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
// console.log(string);

// soal tantangan video 25 soal ke 6 - segitiga pascal - complete - alriiiiiggghhhttttt
// string ini untuk menciptakan ruang string dari bentuk default dari for itu data tipe angka
let string = '';
let n = 5; // jumlah baris
// for ini utk pengulangan bentuk string yang diinginkan, dan ini digabung dengan \n menjadi penentu jumlah baris
for (i = 0; i < n; i++) {
  // ini utk menambah spasi di depan tiap baris untuk membuat segitiga
  for (spasi = 0; spasi < n - i - 1; spasi++) {
    string += ' ';
  }

  // ini utk hitung dan tambahkan angka2 pada baris berikutnya
  let j = 1;
  for (angka = 0; angka <= i; angka++) {
    string += j + ' ';
    j = (j * (i - angka)) / (angka + 1); // rumus segitiga pascal
  }

  // ini untuk membuat agar turun menjadi baris baru
  string += '\n';
}

// consolelog nya dibuat di luar block for agar tidak terjadi duplikasi
console.log(string);
