const listBilanganA = [1, 2, 3, 4, 5];
console.log(listBilanganA);
const listBilanganObject = [
  {
    one: 1,
    two: 2,
  },
  {
    one: 3,
    two: 4,
  },
];
listBilanganObject.forEach((item) => {
  console.log(item.one * 2);
});

const listDuaBilangan = [1, 2, 3, 4, 5, 6];
const resultDuaBilangan = listDuaBilangan.includes(4);
console.log(resultDuaBilangan);

const listBilanganSatu = [1, 2, 3];
const listBilanganDua = [1, 2, 3];
const mergeList = [...listBilanganSatu, ...listBilanganDua];
console.log(mergeList);
const listBilanganTiga = [1, 2, 3, 4, 5];
const resultListBIlanganTiga = listBilanganTiga.includes(3);
console.log(resultListBIlanganTiga);
const getValidation = (item) => item > 3;
const resultFilter = listBilanganTiga.filter(getValidation);
console.log(resultFilter);
const resultSOme = listBilanganTiga.some(getValidation);
console.log(resultSOme);
const resultEvery = listBilanganTiga.every(getValidation);
console.log(resultEvery);
