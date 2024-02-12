const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getData = async (urlSaya) => {
  const fetcher = await fetch(urlSaya);
  const data = await fetcher.json();
  console.log(data);
};

getData(urlSaya);
