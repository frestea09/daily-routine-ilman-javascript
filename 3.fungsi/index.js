const sayHello = () => {
  console.log("hello world");
};

sayHello();

const getAddtion = (inputPertama, inputtKedua) => inputPertama + inputtKedua;

console.log("Result addtion", getAddtion(2, 4));

const getRestParameter = (...restparameter) => restparameter;
console.log(getRestParameter(1, 2, 3, 4, 5));
