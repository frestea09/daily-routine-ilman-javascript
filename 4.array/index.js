const bilangans = [1, 2, 3, 4, 5];

bilangans.forEach((item) => console.log(item));

bilangans.push(2);

console.log(bilangans);

let anotherList = bilangans.map((item) => item * 2);
console.log(anotherList);

console.log(anotherList.includes(2));
console.log(anotherList.filter((item) => item < 3));
