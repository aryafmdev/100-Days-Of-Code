//  Manipulasi array

// 5. Splice & Slice (menyambung/menambah dan mengiris/menghapus data di tengah array)

// Splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...) ini pola rumus nya mauDihapusBerapa opsional, jika tidak perlu di isi 0 (nol) dan elemenBaru1 dst itu sifatnya opsional, jika perlu ya dipakai jika tidak ya diabaikan aja

// let arr = ["Arya", "Fajar", "Maulana"];
// // ini contoh jika tidak ada data di tengah array yang mau dihapus atau diganti
// // arr.splice(2, 0, "Dwi", "Kania", "Ayu"); // ini untuk menambah data di tengah2 array, 2 itu index peletakan nya, 0 itu berapa data yang dihapus, dan "Dwi", "Kania", "Ayu" itu data yang di tambahkan / bisa langsung banyak

// // ini contoh jika ada data di tengah array yang mau dihapus atau diganti
// arr.splice(1, 2, "Dwi", "Kania", "Ayu"); // ini untuk mengganti data di tengah2 array, 1 itu index peletakan nya, 2 itu berapa index data yang mau dihapus setelah posisi index peletakan, dan "Dwi", "Kania", "Ayu" itu data yang di ganti / bisa langsung banyak

// console.log(arr.join(', ')); // ini untuk menampilkan data array dalam bentuk string dan juga dikasih separator koma spasi agar lebih enak untuk dibaca

// Slice (awal, akhir);
let arr = ['Arya', 'Fajar', 'Maulana', 'Dwi', 'Kania', 'Ayu'];
let arr2 = arr.slice(2, 4); // 2  adalah index yang mau dipotong berarti Arya & Fajar hilang sbg index 0 dan index 1, dan 4 itu adalah ujung potongan dari index yang mau dipotong atau dibuang dalam data array itu Kania index ke 4 dan Ayu index ke 5 dalam array makanya terpotong hilang
console.log(arr2.join(', ')); // ini bentuk array yg sdh dipotong
// Slice itu keunikan nya dia tidak merubah data array aslinya, dia hanya mengambil data array aslinya dan memotong atau mengambil sebagian data array aslinya dan menyimpannya dalam data array baru, ini contoh nya jika dipanggil array sebelumnya masih muncul data array lama
console.log(arr.join(', ')); // ini array yg sebelum dipotong
