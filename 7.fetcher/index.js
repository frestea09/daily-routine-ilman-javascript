const urlSaya = "https://jsonplaceholder.typicode.com/users";

const GetData = async (inputUrl) => {
  const response = await fetch(inputUrl);
  const data = await response.json9;
  console.log(data);
};

GetData(urlSaya);
