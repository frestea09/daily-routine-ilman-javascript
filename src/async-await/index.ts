const urlSaya = "https://jsonplaceholder.typicode.com/users";

const getData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return { data };
};

const dataSaya = getData(urlSaya);
console.log(dataSaya.then((res) => console.log(res)));
