const threshold = true;

const result = threshold ? "benar" : "salah";

console.log("result", result);

// list of condtion
const listBilangan = [3, 4, 5, 6];
const resultOne = listBilangan.includes(3);
if (resultOne) {
  console.log(`result condition includes ${resultOne}`);
}

const listOfColor = {
  red: ["apple"],
  green: ["grape"],
};

const getColor = (color) => {
  return listOfColor[color];
};

console.log(getColor("red"));

const getValidation = (inputNumber) => {
  return listBilangan.some(() => listBilangan.includes(inputNumber));
};

console.log(getValidation(3));
