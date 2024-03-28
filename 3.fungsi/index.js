const sayHello = () => {
  console.log("hello world");
};

sayHello();

const getAddtion = (inputPertama, inputKedua) => inputPertama + inputKedua;
console.log(getAddtion(1, 2));

const getRestParameter = (...inputPertama) => inputPertama;

console.log(getRestParameter(1, 2, 3, 4));
