const listBilangan = [1, 2, 3, 4, 5, 12];
listBilangan.forEach((item) => console.log(item));

const getValidation = (item) => {
  return item > 10;
};
console.log(listBilangan.some(getValidation));
