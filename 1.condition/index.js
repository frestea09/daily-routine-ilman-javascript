const isThershold = true;
const theresult = isThershold ? "true" : "false";

console.log("theresult", theresult);

const isThersholdTwo = [true, false];
const theresulttwo = isThersholdTwo.includes(true);
console.log("theresulttwo", theresulttwo);

// condition in function
let thelist = [
  { data: 0, value: 1 },
  { data: 1, value: 2 },
  { data: 2, value: 3 },
  { data: 3, value: 4 },
  { data: 4, value: 5 },
];
const getValidation = (inputlogic) =>
  thelist.filter((item) => item.data == inputlogic);
console.log(getValidation(2));

let validatorOne = true;
let validatorTwo = true;

const theresultthree = validatorOne && validatorTwo && "benar";

console.log("theresultthree", theresultthree);
console.log(false || true);
