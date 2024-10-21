const isThrehold = true;

if (isThrehold) {
  console.log("benar");
} else {
  console.log("salah");
}

const isThreholdShort = true;
const theResult = isThreholdShort ? "benar" : "salah";
console.log(theResult);

const resultTwo = false && true;
console.log(resultTwo);

// condition optimal can use filter
const listOfThrehold = [1, 2, 3, 4, 5];
const resultOfThrehold = listOfThrehold.includes(4);
console.log(resultOfThrehold);
// alternative you can use
const resultOfThreholdTwo = [{ name: "ilman" }, { name: "teguh" }];
const theResultTwo = resultOfThreholdTwo[0];
console.log(theResultTwo);
const getValidate = (inputItem) => inputItem > 4;
const resultValidate = listOfThrehold.some(getValidate);
console.log(resultValidate);
const resultEvery = listOfThrehold.every(getValidate);
const cobaarray = listOfThrehold.map((item) => item * 5);
const hasilFilter = listOfThrehold.filter(getValidate);
console.log(hasilFilter);
