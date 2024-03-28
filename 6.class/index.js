class MyClass {
  name = "ilman";
  constructor() {}
  sayHello() {
    console.log("hello world", this.name);
  }
}
class Manusia extends MyClass {
  constructor(inputName) {
    super();
    this.tampan = inputName;
  }
  getName() {
    return this.name;
  }
}
const objClass = new MyClass();
objClass.sayHello();

const objManusia = new Manusia();
console.log(objManusia.getName());
