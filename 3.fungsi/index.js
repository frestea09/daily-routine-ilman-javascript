const sayHello = () => {
  console.log("hello world");
};

sayHello();

const getAddition = (inputData) => {
  return inputData?.bilanganPertama + inputData?.bilanganKedua;
};

console.log(getAddition({ bilanganPertama: 2, bilanganKedua: 3 }));

const getRestParamaeter = (...inputParameter) => {
  return inputParameter;
};

console.log(getRestParamaeter(1, 3, 4, 5));
