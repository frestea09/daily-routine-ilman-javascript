const myObject = {
  name: "ilman",
  sayHello: () => {
    console.log("hello");
  },
};

for (let item in myObject) {
  console.log(item);
}
