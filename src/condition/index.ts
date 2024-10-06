const variableSatu = true;
if (variableSatu) {
  console.log("hello world");
} else {
  console.log("salah");
}

const good = true;
const tennaryVariable = good ? "bener banget" : "salah banget";
console.log(tennaryVariable);

const listMenu = {
  satu: 1,
  dua: 2,
  tiga: 3,
};

const hasilListMenu = listMenu.satu;
console.log(hasilListMenu);

const listPilihan = [1, 2, 3, 4, 5];
console.log(listPilihan.includes(2));
function getValidation(input) {
  return input > 3;
}

console.log(listPilihan.every(getValidation));
console.log(listPilihan.some(getValidation));

const threholdOne = true;
const threhodlTwo = true;

const resultAndCondtion = threhodlTwo && threholdOne;
console.log(resultAndCondtion);
