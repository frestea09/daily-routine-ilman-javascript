class myClass {
  constructor(inputName) {
    this.name = inputName;
  }
  sayHello() {
    console.log("hello world");
  }
}

const tempTheObject = new myClass("ilman");
console.log(tempTheObject.name);
tempTheObject.sayHello();
