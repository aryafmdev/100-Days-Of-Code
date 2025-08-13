// parseInt akan mengubah data string di dalam prompt menjadi data tipe angka dan akan mengembalikan nilai angka tersebut
// ini contoh jika prompt yang ingin di input adalah data tipe angka

// let angka = parseInt(prompt('Masukkan angka: '));

// switch (angka) {
//     case 1:
//         console.log('Anda memasukkan angka 1');
//         break;
//     case 2:
//         console.log('Anda memasukkan angka 2');
//         break;
//     case 3:
//         console.log('Anda memasukkan angka 3');
//         break;
//     default:
//         console.log('Anda memasukkan angka yang salah');
//         break;
// }

// ini contoh jika prompt yang ingin di input adalah data tipe string, nama value case nya juga harus ditulis dalam bentuk data string

// let item = prompt('Masukkan nama makanan/minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

// switch (item) {
//     case 'nasi':
//         console.log('makanan/minuman SEHAT!');
//         break;
//     case 'daging':
//         console.log('makanan/minuman SEHAT!');
//         break;
//     case 'susu':
//         console.log('makanan/minuman SEHAT!');
//         break;
//     case 'hamburger':
//         console.log('makanan/minuman TIDAK SEHAT!');
//         break;
//     case 'softdrink':
//         console.log('makanan/minuman TIDAK SEHAT!');
//         break;
//     default:
//         console.log('Anda memasukkan nama makanan/minuman yang salah');
//         break;
// }

// nah bentuk switch di atas code nya bisa dibuat lebih efektif dan semacam shorthand seperti ini, yaitu penggunaan break dan console.lognya bisa di satukan

let item = prompt(
  'Masukkan nama makanan/minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)'
);

switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    console.log('makanan/minuman SEHAT!');
    break;
  case 'hamburger':
  case 'softdrink':
    console.log('makanan/minuman TIDAK SEHAT!');
    break;
  default:
    console.log('Anda memasukkan nama makanan/minuman yang salah');
    break;
}
