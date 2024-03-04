const listBilangan = [1, 2, 3, 4, 5];

listBilangan.forEach((item) => console.log(item));

let changeVariable = listBilangan.map((item) => item * 2);

console.log("berubah", changeVariable);

listBilangan.push("temp");

console.log(listBilangan);

console.log(listBilangan.filter((item) => item > 1));
console.log(listBilangan.includes(3));
