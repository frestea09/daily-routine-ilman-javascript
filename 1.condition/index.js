const isThresholdOne = true;
const isThresholdTwo = true;

const getResult = (inputOne, inputTwo) => {
  if (inputOne && inputTwo) {
    return true;
  }
  return false;
};

console.log(getResult(isThresholdOne, isThresholdTwo));
