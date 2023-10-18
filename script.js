const methodSiswa = {
  Minum: function (gelas) {
    this.stamina += gelas;
    console.log(`Halo ${this.nama}, selamat minum!`);
  },
  
  Makan: function (piring) {
    this.stamina += piring;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },

  Olahraga: function (jam){
    this.stamina -= jam;
    console.log(`Halo ${this.nama}, selamat ber Olahraga`)
  }
};

function Siswa(nama,stamina) {
  let Siswa = Object.create(methodSiswa);
  Siswa.nama = nama;
  Siswa.stamina = stamina;

  return Siswa;
}

let ival = Siswa('ival',10)

