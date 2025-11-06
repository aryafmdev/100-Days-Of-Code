// let angka = prompt("masukkan angka");

// if (angka % 2 == 0) {
//   alert (angka + " adalah bilangan genap");
// } else {
//   alert (angka + " adalah bilangan ganjil");
// }

// let noAngkot = 1;
// let jlhAngkot = 10;
// let angkotJalan = 6;

// for (noAngkot; noAngkot <= jlhAngkot; noAngkot++) {
//   if (noAngkot <= angkotJalan) {
//     console.log ("angkot no." + noAngkot + " sedang jalan");
//   } else {
//     console.log ("angkot no." + noAngkot + " sedang tidak jalan");
//   }
// }

// if else if else
// let angka = prompt("masukkan angka");

// if (angka % 2 == 0) {
//   alert("angka yang anda masukkan adalah bilangan genap");
// } else if (angka % 2 == 1) {
//   alert("angka yang anda masukkan adalah bilangan ganjil");
// } else {
//   alert("yang anda masukkan bukan angka");
// }

// let noAngkot = 1;
// let jlhAngkot = 10;
// let angkotJalan = 6;

// versi 1 (original arya) lebih efektif dari kode Pak Dhika jika kompleksitas nya ditingkatkan
// for (noAngkot; noAngkot <= jlhAngkot; noAngkot++) {
//   if (noAngkot == 2 || noAngkot == 8 || noAngkot == 10) {
//     console.log('angkot no.' + noAngkot + ' lembur');
//   } else if (noAngkot == 7 || noAngkot == 9) {
//     console.log('angkot no.' + noAngkot + ' di bengkel');
//   } else {
//     console.log('angkot no.' + noAngkot + ' jalan');
//   }
// }

// versi 2 (Pak Dhika) efektif untuk kondisi tertentu
// for (noAngkot; noAngkot <= jlhAngkot; noAngkot++) {
//   if (noAngkot <= angkotJalan && noAngkot !== 4) {
//     console.log("angkot no." +noAngkot+ " jalan");
//   } else if (noAngkot === 4 || noAngkot === 8 || noAngkot === 10) {
//     console.log("angkot no."+noAngkot+" lembur");
//   } else {
//     console.log("angkot no."+noAngkot+" di bengkel");
//   }
// }

// let angka = Number(prompt("masukkan angka 1 sampai 3"));

// switch (angka) {
//   case 1:
//     alert ("angka yang anda masukkan adalah angka 1");
//   break;
//   case 2:
//     alert ("angka yang anda masukkan adalah angka 2");
//   break;
//   case 3:
//     alert ("angka yang anda masukkan adalah angka 3");
//   break;
//   default:
//     alert ("angka yang anda masukkan sudah lebih dari yang diijinkan atau memang bukan angka")
// }

// let food = prompt("masukkan nama makanan/minuman sehat");

// switch (food) {
//   case "nasi":
//   case "ikan":
//   case "daging":
//   case "sayur":
//     alert("makanan sehat");
//     break;
//   case "kopi":
//   case "teh":
//     alert("minuman sehat");
//     break;
//   case "burger":
//   case "pizza":
//   case "sosis":
//   case "nugget":
//     alert("makanan gak sehat");
//     break;
//   case "softdrink":
//   case "bir":
//     alert("minuman gak sehat");
//     break;
//   default:
//     alert("error, input invalid")
// }

// // kode ini akan membentuk 10 baris, perbarisnya isi 5 bintang
// let s = "";
// // ini utk buat baris baru
// for (i = 0; i < 10; i++) {
//   // ini utk isian ke samping
//   for (j = 0; j < 5; j++) {
//     s+="⭐"
//   } // backslash n ini utk buat baris baru fungsinya
//   s+="\n";
// }
// console.log(s);

// // kode ini akan membentuk 10 baris, baris 1 bintang 1 baris 2 bintang 2 dst sampai baris ke 10
// let s = "";
// // ini utk buat baris baru
// for (i = 0; i < 10; i++) {
//   // ini utk isian ke samping
//   for (j = 0; j <= i; j++) {
//     s+="⭐"
//   }
//   s+="\n";
// }
// console.log(s);

// // kode ini akan membentuk 10 baris, baris 1 bintang 10 baris 2 bintang 9 dst sampai baris ke 10 kebalikan dari yg atas
// let s = "";
// // ini utk buat baris baru
// for (i = 0; i < 10; i++) {
//   // ini utk isian ke samping
//   for (j = 10; j > i; j--) {
//     s+="⭐"
//   }
//   s+="\n";
// }
// console.log(s);

// // kode ini akan membentuk segitiga sama kaki
// let s = "";
// // ini utk buat baris baru
// for (i = 0; i < 10; i++) {
//   // ini utk isian spasi ke samping
//   for (j = 10; j > i; j--) {
//     s+="."
//   }
//   // ini utk isian bintang ke samping
//   for (j = 0; j <= i; j++) {
//     s+="*"
//   }
//   // ini utk isian spasi ke samping
//   for (j = 0; j < i; j++) {
//     s+="*"
//   }
//   s+="\n";
// }
// console.log(s);

// // kode ini akan membentuk segitiga sama kaki terbalik
// let s = "";
// // ini utk buat baris baru
// for (i = 0; i < 10; i++) {
//   // ini utk isian spasi ke samping
//   for (j = 0; j <= i; j++) {
//     s+="."
//   }
//   // ini utk isian bintang ke samping
//   for (j = 10; j > i; j--) {
//     s+="*"
//   }
//   // ini utk isian spasi ke samping
//   for (j = 9; j > i; j--) {
//     s+="*"
//   }
//   s+="\n";
// }
// console.log(s);

// kode ini akan membentuk segitiga diamond
let s = '';
// ini utk buat baris baru
for (i = 0; i < 10; i++) {
  // ini utk isian spasi ke samping
  for (j = 10; j > i; j--) {
    s += ' ';
  }
  // ini utk isian bintang ke samping
  for (j = 0; j <= i; j++) {
    s += '*';
  }
  // ini utk isian spasi ke samping
  for (j = 0; j < i; j++) {
    s += '*';
  }

  s += '\n';
}
for (i = 0; i < 10; i++) {
  // ini utk isian spasi ke samping
  for (j = 0; j <= i; j++) {
    s += ' ';
  }
  // ini utk isian bintang ke samping
  for (j = 10; j > i; j--) {
    s += '*';
  }
  // ini utk isian spasi ke samping
  for (j = 9; j > i; j--) {
    s += '*';
  }
  s += '\n';
}
console.log(s);

// buat function jumlahkan hasil volume 2 kubus
// ini versi arya pertama mencoba
// function jumlahVolume2Kubus(a, b) {
//   let a = a*a*a;
//   let b = b*b*b;
//   return (a, b) = (a+b);
// }

// // ini versi perbaikan nya
// // versi tanpa variabel total
// function jumlahVolume2Kubus(a, b) {
//   let volumeA = a * a * a;
//   let volumeB = b * b * b;

//   return volumeA + volumeB;
// }

// console.log(jumlahVolume2Kubus(3, 4));

// // ini versi dengan pakai variabel total
// function jumlahVolume2Kubus(a, b) {
//   let volumeA = a * a * a;
//   let volumeB = b * b * b;
//   let total = volumeA + volumeB;

//   return total;
// }

// console.log(jumlahVolume2Kubus(4, 5));

// // ini versi refactoring
// function jumlahVolume2Kubus(a, b) {
//   // a**3 itu sama dengan a*a*a
//   // jadi nilai a dan b di atas langsung di return nilainya
//   return (a**3) + (b**3);
// }
// console.log(jumlahVolume2Kubus(4, 5));

// // contoh function declaration (biasa)
// function jlh2VolKubus(a, b) {
//   return (a*a*a) + (b*b*b);
// }
// console.log(jlh2VolKubus(2,3));

// // contoh function expression (advance)
// let jlh2VolKubus2 = function(c, d) {
//   return (c**3) + (d**3);
// }
// console.log(jlh2VolKubus2(3,4));

// latihan buat object dan memanggilnya langsung di console.log
// function Angkot(sopir, trayek, penumpang, kas) {
//   this.sopir = sopir;
//   this.trayek = trayek;
//   this.penumpang = penumpang;
//   this.kas = kas;

//   this.penumpangNaik = function (namaPenumpang) {
//     this.penumpang.push(namaPenumpang);
//     return this.penumpang;
//   };

//   this.penumpangTurun = function (namaPenumpang, bayar) {
//     if (this.penumpang.length === 0) {
//       console.log('angkot masih kosong');
//       return false;
//     }

//     for (let i = 0; i < this.penumpang.length; i++) {
//       if (this.penumpang[i] == namaPenumpang) {
//         this.penumpang[i] = undefined;
//         this.kas += bayar;
//         return this.penumpang;
//       }
//     }
//   };
// }

// let angkot1 = new Angkot('Arya', ['rawabuaya', 'kuningan'], [], 0);
// let angkot2 = new Angkot('Ivan', ['tangsel', 'jaksel'], [], 0);
