const listBilangan = [1, 2, 3];

listBilangan.map((item) => console.log("item", item));

listBilangan.push({ id: 3, name: "temp" });
console.log(listBilangan);
console.log(listBilangan.includes(2));
console.log(listBilangan.filter((item) => item > 1));
