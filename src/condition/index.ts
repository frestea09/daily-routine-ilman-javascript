const isLogin = true;
if (isLogin) {
  console.log("hello world");
} else {
  console.log("input salah");
}
const isTrue = isLogin ? "benar" : "salah";
// console.log(isTrue);
const isConditionOne = true;
const isConditionTwo = true;
const resultANDConditon = isConditionOne && isConditionTwo ? "benar" : "salah";
// console.log(resultANDConditon);
const isOne = false;
const theResult = isOne && "benar";
// console.log(theResult);
const isTwo = false;
const theResultOne = isTwo || "benar";
// console.log(theResultOne);

const listCondition = {
  one: "satu",
  two: "dua",
};

const result = listCondition["one"];
// console.log(result);

const listBilangan = [1, 2, 3, 4, 5, 6];
const getCheck = (inputItem) => {
  return inputItem > 3;
};
const theResultBilangan = listBilangan.every(getCheck);
console.log(theResultBilangan);
const resultSome = listBilangan.some(getCheck);
console.log(resultSome);
