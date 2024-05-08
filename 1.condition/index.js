const isLogin = true;

const getLogin = isLogin ? "Login" : "Logout";

console.log("login", getLogin);

const getValidationOne = ({ inputString, listInput }) =>
  listInput.includes(inputString);

const listBilangan = [1, 2, 3, 4, 5];

console.log(getValidationOne({ inputString: 4, listInput: listBilangan }));

console.log(listBilangan.some((item) => item === 1));
