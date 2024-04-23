const urlSaya = "https://jsonplaceholder.typicode.com/users";

const data = fetch(urlSaya);
console.log("data", data);
const getData = async (inputParameter) => {
  const response = await fetch(inputParameter);
  const result = await response.json();
  console.log("result", result);
};

console.log(getData(urlSaya));
// const getData = async (urlSaya) => {
//   const response = await fetch(urlSaya);
//   const result = await response.json();
//   console.log("result", result);
// };

// getData(urlSaya);
