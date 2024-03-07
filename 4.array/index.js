const listBilangan = [1, 2, 3, 4, 5, 6];

listBilangan.forEach((item) => console.log(item));

const listTemp = ["temp", 1, "dua", 3];

console.log(listTemp.filter((item) => item > 1));
console.log(listTemp.includes(1));

listTemp.push("super temp");

console.log(listTemp);

const listResult = [...listBilangan, ...listTemp];
console.log(listResult);
