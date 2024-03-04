const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getDate = async (inputSaya) => {
  const response = await fetch(inputSaya);
  const data = await response.json();
  console.log("data", data);
};

getDate(urlSaya);
