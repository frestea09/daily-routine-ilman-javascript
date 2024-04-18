const listBilanganPertama = [1, 2, 3, 4, 5, 6];
listBilanganPertama.forEach((item) => console.log(item));

const resultDouble = listBilanganPertama.map((item) => item * 2);
console.log("result double", resultDouble);

const gabunganList = [...resultDouble, ...listBilanganPertama];
console.log("gabungan result", gabunganList);
