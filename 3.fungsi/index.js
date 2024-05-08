const getAddtion = ({ inputOne = 0, inputTwo = 0 }) => {
  return inputOne + inputTwo;
};

console.log("addtion", getAddtion({ inputOne: 2, inputTwo: 3 }));

const getRestParameter = (...inputParamater) => inputParamater;

console.log(getRestParameter(1, 2, 3, 4, 5));
