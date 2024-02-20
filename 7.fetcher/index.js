const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getData = async (inputUrl) => {
  const fetcher = await fetch(inputUrl);
  const response = await fetcher.json();
  console.log(response);
};

getData(urlSaya);
