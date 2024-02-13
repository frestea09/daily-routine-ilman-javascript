const litsBilangan = [1, 2, 3, 4, 5];

litsBilangan.forEach((item) => console.log("item", item));

const resultTwo = litsBilangan.map((item) => item * 2);
console.log(litsBilangan);
console.log("result two", resultTwo);

litsBilangan.push("2");
console.log(litsBilangan);

console.log(litsBilangan.includes(2));
console.log(litsBilangan.filter((item) => item > 2));
