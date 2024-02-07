const listBilangan = [1, 2, 3, 4, 5, 6];

listBilangan.forEach((item) => console.log(item));

const temp = listBilangan.map((item) => item * 2);

console.log(temp, "temp");
listBilangan.push(4);
console.log(listBilangan);
