const item = () => {
  console.log("hello world");
};

item();
const getAddition = (inputBilanganPertama, inputBilanganKedua) =>
  inputBilanganPertama + inputBilanganKedua;

const resultAddition = getAddition(1, 2);
console.log({ resultAddition });

const getArray = () => ({ one: 1 });
const resultArray = getArray();
console.log(resultArray);

const getObject = ({ bilanganSatu = 0, bilanganDua = 0 }) =>
  bilanganSatu + bilanganDua;

const resultObject = getObject({ bilanganSatu: 1, bilanganDua: 2 });
console.log(resultObject);
