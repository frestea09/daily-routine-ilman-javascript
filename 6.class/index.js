class MyClass {
  constructor() {}
  sayHello() {
    console.log("hello world");
  }
  getAddition(inputPertama, inputKedua) {
    return inputPertama + inputKedua;
  }
  getRestParamater(...inputParameter) {
    return inputParameter;
  }
}

const objMyClass = new MyClass();
objMyClass.sayHello();
console.log(objMyClass.getAddition(3, 4));
console.log(objMyClass.getRestParamater(1, 2, 3, 4));
