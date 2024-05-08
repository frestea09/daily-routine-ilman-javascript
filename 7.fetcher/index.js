const urlSaya = "https://jsonplaceholder.typicode.com/users";
const getData = async (urlSaya) => {
  const response = await fetch(urlSaya);
  const result = await response.json();
  console.log(result);
};

console.log(getData(urlSaya));
// const getData = async (urlSaya) => {
//   const response = await fetch(urlSaya);
//   const result = await response.json();
//   console.log("result", result);
// };

// getData(urlSaya);
