const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getData = async (inputUrl) => {
  const response = await fetch(inputUrl);
  const data = await response.json();
  console.log("data", data);
};

getData(urlSaya);
