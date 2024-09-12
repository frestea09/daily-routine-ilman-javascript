const variabelSatu = true;
if (variabelSatu) {
  console.log("benar");
} else {
  console.log("salah");
}
const variableDua = true;
const variableTiga = false;
const resultTennary = variableDua && variableTiga ? "benar" : "salah";
console.log(resultTennary);
const listBilangan = [1, 2, 3, 4, 6];
const resultIncludes = listBilangan.includes(3);
console.log(resultIncludes);
const getThreshold = (item) => item < 3;
const resultFilter = listBilangan.filter(getThreshold);
console.log(resultFilter);
const resultSOme = listBilangan.some(getThreshold);
console.log(resultSOme);
const resultEvery = listBilangan.every(getThreshold);
console.log(resultEvery);
