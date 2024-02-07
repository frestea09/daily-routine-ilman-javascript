class MyClass {
  constructor() {}
  sayHelloWorld() {
    console.log("hello world");
  }
  getAddition(inputOne, inputTwo) {
    return inputOne + inputTwo;
  }
}

const myObject = new MyClass();
const hasil = myObject.getAddition(2, 3);
console.log(hasil);
