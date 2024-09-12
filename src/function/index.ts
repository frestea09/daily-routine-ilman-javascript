const sayHello = () => {
  console.log("hello world");
};
sayHello();
const getAddition = (inputOne, inputTwo) => inputOne + inputTwo;
console.log(getAddition(1, 2));
const getReturnObject = (inputOne, inputTwo) => ({ inputOne, inputTwo });
console.log(getReturnObject(1, 2));
