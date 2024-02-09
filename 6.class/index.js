class MyClass {
  constructor() {}
  sayHello() {
    console.log("hello world");
  }
}

class MyClassTwo extends MyClass {
  constructor(inputName) {
    super();
    this.name = inputName;
  }
  getName() {
    return this.name;
  }
}
const myObject = new MyClass();
myObject.sayHello();

const myObjectTwo = new MyClassTwo("ilman");
console.log(myObjectTwo.getName());
