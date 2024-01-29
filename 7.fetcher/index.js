const urlSaya = "https://jsonplaceholder.typicode.com/users";
const getData = async (inputUrl) => {
  let theObject = await fetch(inputUrl);
  let myText = await theObject.json();
  console.log(myText);
};

getData(urlSaya);
