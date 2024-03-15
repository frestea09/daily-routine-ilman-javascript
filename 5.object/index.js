const myObject = {
  name: "ilman teguh",
  age: 32,
  sayHello: () => {
    console.log("hello world");
  },
};

myObject.sayHello();

console.log(myObject.name);
myObject.name = "tampan";
console.log(myObject.name);
