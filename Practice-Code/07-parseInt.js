// jika ingin prompt isian data nya hanya angka dan berjalan operasinya, tanda (==) nya cukup 2 aja krn kalau (===) nya 3 biji maka akan error krn prompt itu akan dianggap data string

// let angka = (prompt('Masukkan angka: '));

// if (angka == 1) {
//     console.log('Anda memasukkan angka 1');
// } else if (angka == 2) {
//     console.log('Anda memasukkan angka 2');
// } else if (angka == 3) {
//     console.log('Anda memasukkan angka 3');
// } else {
//     console.log('Anda memasukkan angka yang salah');
// }

// ini cara lain jika menggunakan (===) nya 3 tapi value yang di dalam variabel wajib diubah ke string juga, baru operasinya bisa berjalan, karena semua data di dalam prompt akan dianggap data string

// let angka = (prompt('Masukkan angka: '));

// if (angka === '1') {
//     console.log('Anda memasukkan angka 1');
// } else if (angka === '2') {
//     console.log('Anda memasukkan angka 2');
// } else if (angka === '3') {
//     console.log('Anda memasukkan angka 3');
// } else {
//     console.log('Anda memasukkan angka yang salah');
// }

// ini best practice jika menggunakan (===) tanpa harus merubah value menjadi data string dengan menggunakan parseInt untuk mengubah data string di dalam prompt menjadi data tipe angka bukan data string
// parseInt akan mengubah data string di dalam prompt menjadi data tipe angka dan akan mengembalikan nilai angka tersebut

let angka = parseInt(prompt('Masukkan angka: '));

if (angka === 1) {
  console.log('Anda memasukkan angka 1');
} else if (angka === 2) {
  console.log('Anda memasukkan angka 2');
} else if (angka === 3) {
  console.log('Anda memasukkan angka 3');
} else {
  console.log('Anda memasukkan angka yang salah');
}
