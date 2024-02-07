const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getData = async (inputURL) => {
  const fetcher = await fetch(inputURL);
  const result = await fetcher.json();
  console.log("the result", result);
};

getData(urlSaya);
