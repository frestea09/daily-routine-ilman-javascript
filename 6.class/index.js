class MyClass {
  constructor() {}
  sayHello() {
    console.log("hello world");
  }
}

class Human extends MyClass {
  getAddtion(inputOne, inputTwo) {
    return inputOne + inputTwo;
  }
}

const temp = new Human();
temp.sayHello();
