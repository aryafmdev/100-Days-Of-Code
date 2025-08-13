let tanya = true;
while ( tanya ) {
  // menangkap pilihan player
  let p = prompt('Pilih: gajah, semut, orang');

  // membangkitkan bilangan random
  let com = Math.random();

  if (com < 0.34) {
    com = 'gajah';
  } else if (com >= 0.34 && com < 0.67) {
    com = 'orang';
  } else {
    com = 'semut';
  }

  let hasil = '';
  // menentukan rules
  if (p == com) {
    hasil = 'SERI!';
  } else if (p == 'gajah') {
    // cara pintas pakai rumus ternary
    hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
  } else if (p == 'orang') {
    // cara pintas pakai rumus ternary
    hasil = (com == 'gajah') ? 'KALAH!' : 'MENANG!';
  } else if (p == 'semut') {
    // cara pintas pakai rumus ternary
    hasil = (com == 'orang') ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'Memasukan pilihan yang salah! Computer otomatis jadi MENANG!';
  }

  // tampilkan hasilnya
  alert('Kamu memilih : ' + p + '\nComputer memilih : ' + com + '\nHasilnya : Kamu ' + hasil);

  tanya = confirm('Apakah kamu ingin bermain lagi?');
}

alert('Terima kasih sudah bermain!');
