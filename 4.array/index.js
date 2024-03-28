const listbilangna = [1, 2, 3, 4, 5, 6];

listbilangna.forEach((item) => console.log(item));

const result = listbilangna.map((item) => item ** 2);
console.log("result", result);

const listsatu = [1, 2, 3, 4];
const listdua = [5, 6, 7, 8];

console.log([...listsatu, ...listdua]);
