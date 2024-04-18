class People {
  sayHello() {
    console.log("hello");
  }
}

class Ilman extends People {
  constructor() {
    super();
  }
}

const myClass = new Ilman();
myClass.sayHello();
