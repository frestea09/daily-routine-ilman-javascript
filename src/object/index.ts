const obejctTemp = {
  nama: "ilman",
  umur: 23,
  bilanganPertama: 3,
  bilanganKedua: 3,
};

console.log(obejctTemp.nama);

const { nama, umur, bilanganPertama: ganteng } = obejctTemp;
console.log(nama, umur, ganteng);
