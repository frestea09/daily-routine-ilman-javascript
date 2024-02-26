const listBilangan = [1, 2, 3, 4, 5, 6];

console.log("listBilangan", listBilangan);

listBilangan.push(5);

console.log("listBilangan", listBilangan);

listBilangan.forEach((item) => console.log(item));

const upgradeVariable = listBilangan.map((item) => item * 2);
console.log("upgradeVariable", upgradeVariable);
