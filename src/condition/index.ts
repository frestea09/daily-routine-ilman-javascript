const threshold = true;
if (threshold) {
  console.log("hello world");
}
if (threshold) {
  console.log("benar");
} else {
  console.log("salah");
}

const tenarryThrehold = true;
const resultOfTennary = tenarryThrehold ? "benar" : "salah";
console.log(resultOfTennary);

const firstThreshold = true;
const secondThreshold = false;
const resultAndConditon = firstThreshold && secondThreshold ? "benar" : "salah";
console.log(resultAndConditon);
const resultOrConditon = firstThreshold || secondThreshold ? "benar" : "salah";
console.log(resultOrConditon);

const listBuah = ["apel", "jeruk", "jambu"];
const result = listBuah.includes("apel");
console.log({ result });

const listOption = {
  red: "merah",
  purple: "ungu",
  yellow: "kuning",
};

console.log(listOption["yellow"]);

const listBilangan = [1, 2, 3, 4, 5];
const getValidation = (inputBilangan: number) =>
  inputBilangan > 2 && inputBilangan;

console.log(listBilangan.some(getValidation));
console.log(listBilangan.every(getValidation));
