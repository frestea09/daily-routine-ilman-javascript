const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getDataUser = async (urlSaya) => {
  const objFetcher = await fetch(urlSaya);
  const resultData = await objFetcher.json();
  console.log(resultData);
};

console.log(getDataUser(urlSaya));
