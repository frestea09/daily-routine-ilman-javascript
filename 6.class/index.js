class MyClassTwo {
  constructor(input) {
    this.input = input;
  }
  sayHelloWolrd() {
    console.log("hello world");
  }
  sayInputFunction() {
    console.log(this.input);
  }
}

const myObject = new MyClassTwo();
myObject.sayHelloWolrd();
myObject.sayInputFunction();
