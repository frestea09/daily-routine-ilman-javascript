const listBilangan = [1, 2, 3, 4, 5];
listBilangan.forEach((item) => console.log(item));
const updateResult = listBilangan.map((item) => item ** 2);
console.log({ updateResult });

const getValidation = (item: number) => item < 3;
const resultSome = listBilangan.some(getValidation);
console.log(resultSome);
const resultEvery = listBilangan.every(getValidation);
console.log(resultEvery);
const resultFilter = listBilangan.filter((item) => item > 2);
console.log(resultFilter);
