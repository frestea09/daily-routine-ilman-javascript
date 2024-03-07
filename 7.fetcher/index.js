const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getData = async (urlSaya) => {
  const response = await fetch(urlSaya);
  const data = await response.json();
  console.log(data);
};

getData(urlSaya);
