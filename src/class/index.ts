const ObjectSaya = class {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello my name is ${this.name}`);
  }
};

const temp = new ObjectSaya("ilman");
temp.sayHello();
